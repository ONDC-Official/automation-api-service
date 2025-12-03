import * as iso8601 from "iso8601-duration";

export function isoDurationToSeconds(duration: string): number {
	const d = iso8601.parse(duration);
	return iso8601.toSeconds(d);
}
