export type TransactionId = string;
export type FlowId = string;
export type PayloadId = string;

export type SessionDifficulty = {
	sensitiveTTL: boolean;
	useGateway: boolean;
	stopAfterFirstNack: boolean;
	protocolValidations: boolean;
	timeValidations: boolean;
	headerValidaton: boolean;
	useGzip: boolean;
};

export type Expectation = {
	sessionId: string;
	flowId: string;
	expectedAction?: string;
	expireAt: string;
};

export interface ApiData {
	entryType: "API";
	action: string;
	payloadId: string;
	messageId: string;
	response: any;
	timestamp: string;
	ttl?: number;
}

export interface FormApiType {
	entryType: "FORM";
	formType: "HTML_FORM" | "DYNAMIC_FORM";
	formId: string;
	submissionId?: string;
	timestamp: string;
	error?: any;
}

export type HistoryType = FormApiType | ApiData;
export interface TransactionCache {
	sessionId?: string;
	flowId?: string;
	latestAction: string;
	latestTimestamp: string;
	type: "default" | "manual";
	subscriberType: "BAP" | "BPP";
	messageIds: string[];
	apiList: HistoryType[];
	referenceData: Record<string, any>;
}

export interface SubscriberCache {
	activeSessions: Expectation[];
}

export interface SessionCache {
	// against session_id
	transactionIds: string[];
	flowMap: Record<FlowId, TransactionId>;
	npType: "BAP" | "BPP";
	domain: string;
	version: string;
	subscriberId?: string;
	subscriberUrl: string;
	env: "STAGING" | "PRE-PRODUCTION" | "LOGGED-IN";
	sessionDifficulty: SessionDifficulty;
	usecaseId: string;
}

export interface RequestProperties {
	defaultMode: boolean;
	subscriberUrl: string;
	subscriberType: "BAP" | "BPP";
	action: string;
	transactionId: string;
	difficulty: SessionDifficulty;
	sessionId?: string;
	flowId?: string;
	env: "STAGING" | "PRE-PRODUCTION" | "LOGGED-IN";
	transactionHistory?: TransactionCache;
	sessionData?: SessionCache;
	requestSource?: "MOCK_SERVER" | "NP" | "OTHER";
}

export type EnvType = "STAGING" | "PRE-PRODUCTION" | "LOGGED-IN";
