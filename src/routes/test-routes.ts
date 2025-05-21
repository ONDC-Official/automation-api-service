import express from "express";
import { ValidationController } from "../controllers/validation-controller";
import { setAckResponse } from "../utils/ackUtils";
import apiKeyValidation from "../middleware/api-key";
const router = express();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const validationController = new ValidationController();

import path from "path";

router.use(
	express.static(path.resolve(__dirname, "../validations/L1-validations/page"))
);
router.post(
	"/:action",
	apiKeyValidation,
	validationController.validateRequestBodyNp,
	validationController.validateL0,
	validationController.validateL1,
	(req, res, next) => {
		res.send(setAckResponse(req.body, true));
	}
);

router.get("/",
	apiKeyValidation,
	(req, res) => {
	res.sendFile(
		path.resolve(__dirname, "../validations/L1-validations/page/index.html")
	);
});

export default router;
