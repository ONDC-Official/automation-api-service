import express from "express";
import { ValidationController } from "../controllers/validation-controller";
import { setAckResponse } from "../utils/ackUtils";
import logger from "@ondc/automation-logger";
const router = express();
// router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const validationController = new ValidationController();

import path from "path";

router.use(
    express.static(
        path.resolve(__dirname, "../validations/L1-validations/page"),
    ),
);
router.post(
    "/:action",
    validationController.validateRequestBodyNp,
    validationController.validateL0,
    validationController.validateSingleL1,
    async (req, res, next) => {
        res.send(setAckResponse(req.body, true));
    },
);

router.get("/", (req, res) => {
    res.sendFile(
        path.resolve(
            __dirname,
            "../validations/L1-validations/page/index.html",
        ),
    );
});

export default router;
