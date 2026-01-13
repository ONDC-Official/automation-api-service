import { Request } from "express";

export function getActionParam(req: Request) {
	const { action } = req.params;
	if (Array.isArray(action)) {
		throw new Error("Invalid action in request params");
	}
	return action;
}
