import {NextFunction, Request, Response} from "express";
import logger from "../utils/logger";
import {setAckResponse, setBadRequestNack} from "../utils/ackUtils";
import {performL0Validations} from "../validations/L0-validations/schemaValidations";
import {performL1Validations} from "../validations/L1-validations";
import {isValidJSON, performContextValidations} from "../utils/data-utils/validate-context";
import {getPublicKeys} from "../utils/headerUtils";
import {isHeaderValid} from "ondc-crypto-sdk-nodejs";
import {DataService} from "../services/data-service";
import {computeSubscriberUri} from "../utils/subsciber-utils";

export class ValidationController {
    validateSignature = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const header = JSON.stringify(req.headers);
            const body = JSON.stringify(req.body);
            const valid = await isHeaderValid({
                header: header,
                body: body,
                publicKey: await getPublicKeys(header, body),
            });
            if (!valid) {
                res
                    .status(200)
                    .send(setAckResponse(false, "Invalid Signature", "10001"));
                return;
            }
            next();
        } catch (error) {
            res.status(200).send(setAckResponse(false, "Invalid Signature", "10001"));
            return;
        }
    };
    // Middleware: Validate request body
    validateRequestBodyNp = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const body = req.body;
        if (!isValidJSON(JSON.stringify(body))) {
            logger.error("Invalid request body", body);
            res.status(200).send(setBadRequestNack(": Invalid request body is not a valid JSON"));
            return;
        }
        const action = req.params.action;
        if (!body) {
            logger.error("Invalid request body", body);
            res.status(200).send(setBadRequestNack(": Invalid request body"));
            return;
        }
        if (!body.context) {
            logger.error("Invalid request body", body);
            res.status(200).send(setBadRequestNack(": Context is missing"));
            return;
        }
        try {
            computeSubscriberUri(body.context, action, false);
        } catch (error) {
            logger.error("Ambiguous subscriber URL", error);
            res.status(200).send(setBadRequestNack(": Ambiguous subscriber URL inside context"));
            return;
        }
        next();
    };

    validateRequestBodyMock = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const body = req.body;
        if (!body || !body.context || !body.context.action) {
            logger.error("Invalid request body", body);
            res.status(200).send(setBadRequestNack());
            return;
        }
        try {
            computeSubscriberUri(body.context, body.context.action, false);
        } catch {
            logger.error("Ambiguous subscriber URL", body);
            res.status(200).send(setBadRequestNack());
            return;
        }
        next();
    };

    // Middleware: L0 validations
    validateL0(req: Request, res: Response, next: NextFunction) {
        const {action} = req.params;
        const body = req.body;

        const l0Result = performL0Validations(body, action);
        if (!l0Result.valid) {
            res.status(200).send(setAckResponse(false, l0Result.errors, "400"));
            return;
        }
        logger.info("L0 validations passed");
        next();
    }

    // Middleware: L1 validations
    validateL1(req: Request, res: Response, next: NextFunction) {
        const {action} = req.params;
        const body = req.body;

        const apiLayerUrl = process.env.API_SERVICE_URL;
        const extraMessage = ` /n/n _note: find complete list of [validations](${apiLayerUrl}/test)_`
        const l1Result = performL1Validations(action, body);
        if (!l1Result[0].valid) {
            const error = l1Result[0].description as string + extraMessage;
            const code = l1Result[0].errorCode as number;
            res
                .status(200)
                .send(setAckResponse(false, error, code.toString()));
            return;
        }
        logger.info("L1 validations passed");
        next();
    }

    // Middleware: Context validations
    async validateContextFromNp(req: Request, res: Response, next: NextFunction) {
        const {action} = req.params;
        const body = req.body;
        const subscriberUrl = computeSubscriberUri(body.context, action, false);
        const contextValidations = await performContextValidations(
            body.context,
            subscriberUrl
        );
        if (!contextValidations.valid) {
            res
                .status(200)
                .send(setAckResponse(false, contextValidations.error, "400"));
            return;
        }
        logger.info("Context validations passed");
        next();
    }

    async validateContextFromMock(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        const subscriberUrl = req.query.subscriberUrl as string ?? computeSubscriberUri(req.body.context, req.params.action, true);
        const context = req.body.context;
        const contextValidations = await performContextValidations(
            context,
            subscriberUrl
        );
        if (!contextValidations.valid) {
            res
                .status(200)
                .send(setAckResponse(false, contextValidations.error, "400"));
            return;
        }
        next();
    }

    async validateSessionFromNp(req: Request, res: Response, next: NextFunction) {
        const {action} = req.params;
        const body = req.body;
        const context = body.context;
        const validSession = await new DataService().checkSessionExistence(
            computeSubscriberUri(context, action, false)
        );
        if (!validSession) {
            res.status(200).send(setAckResponse(false, "Invalid Session", "90001"));
            return;
        }
        next();
    }

    async validateSessionFromMock(req: Request, res: Response, next: NextFunction) {
        const subscriberUrl = req.query.subscriberUrl as string ?? computeSubscriberUri(req.body.context, req.params.action, true);

        const validSession = await new DataService().checkSessionExistence(subscriberUrl);
        if (!validSession) {
            res.status(200).send(setAckResponse(false, "Invalid Session", "90001"));
            return;
        }
        next();
    }
}
