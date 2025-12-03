import { Request, Response } from "express";
import logger from "@ondc/automation-logger";
import { getLoggerMetaData } from "../utils/loggingUtils";
import { htmlFormService } from "../services/form-service";

export async function htmlFormController(req: Request, res: Response) {
	try {
		logger.info("Received form submission", getLoggerMetaData(req));
		const formData = req.body;
		if (!formData || typeof formData !== "object") {
			res.status(400).send("Invalid form data");
			return;
		}
		if (
			typeof formData.transaction_id !== "string" ||
			typeof formData.subscriber_url !== "string" ||
			typeof formData.form_action_id !== "string"
		) {
			logger.error("Invalid form submission", getLoggerMetaData(req), {
				formData,
			});
			res.status(400).send(
				`Missing required form fields: transaction_id, subscriber_url, or form_action_id
                should be strings`
			);
			return;
		}
		logger.info("formDataaa", formData);
		await htmlFormService(
			formData.transaction_id,
			formData.subscriber_url,
			formData.form_action_id,
			getLoggerMetaData(req),
			formData.form_type,
			formData.submissionId,
			formData.error
		);
		res.status(200).send("Form submitted successfully");
	} catch (error) {
		logger.error(
			"Error processing form submission",
			getLoggerMetaData(req),
			error
		);
		res.status(500).send("Internal Server Error");
	}
}
