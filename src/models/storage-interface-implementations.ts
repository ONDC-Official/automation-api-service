import { StorageInterface } from "../validations/L1-validations";

type StoredValue = {
	value: string;
	expiresAt: number;
};

class L1ValidationsStore implements StorageInterface {
	private data: Map<string, StoredValue>;
	private cleanupInterval: NodeJS.Timeout;

	constructor(
		private ttlMs: number = 24 * 60 * 60 * 1000,
		cleanupEveryMs: number = 60 * 60 * 1000
	) {
		this.data = new Map<string, StoredValue>();

		// Run cleanup job periodically (default: every 1 hour)
		this.cleanupInterval = setInterval(() => this.cleanup(), cleanupEveryMs);
		this.cleanupInterval.unref?.(); // allow process to exit even if interval is active
	}

	async saveKey(
		uniquePrefix: string,
		key: string,
		value: string
	): Promise<void> {
		const storageKey = `${uniquePrefix}:${key}`;
		this.data.set(storageKey, {
			value,
			expiresAt: Date.now() + this.ttlMs,
		});
	}

	async getKey(uniquePrefix: string, key: string): Promise<string> {
		const storageKey = `${uniquePrefix}:${key}`;
		const entry = this.data.get(storageKey);

		if (!entry) throw new Error("Key not found: " + key);

		if (Date.now() > entry.expiresAt) {
			this.data.delete(storageKey);
			throw new Error("Key expired: " + key);
		}

		return entry.value;
	}

	async deleteKey(uniquePrefix: string, key: string): Promise<void> {
		this.data.delete(`${uniquePrefix}:${key}`);
	}

	async listKeys(uniquePrefix: string): Promise<string[]> {
		const now = Date.now();
		return Array.from(this.data.entries())
			.filter(
				([key, entry]) =>
					key.startsWith(`${uniquePrefix}:`) && entry.expiresAt > now
			)
			.map(([key]) => key);
	}

	async clearStorage(): Promise<void> {
		this.data.clear();
	}

	async keyExists(uniquePrefix: string, key: string): Promise<boolean> {
		const storageKey = `${uniquePrefix}:${key}`;
		const entry = this.data.get(storageKey);

		if (!entry) return false;

		if (Date.now() > entry.expiresAt) {
			this.data.delete(storageKey);
			return false;
		}

		return true;
	}

	async deleteKeysWithPrefix(uniquePrefix: string): Promise<void> {
		for (const [key] of this.data.entries()) {
			if (key.startsWith(`${uniquePrefix}:`)) {
				this.data.delete(key);
			}
		}
	}

	// --- Internal cleanup ---
	private cleanup(): void {
		const now = Date.now();
		for (const [key, entry] of this.data.entries()) {
			if (entry.expiresAt <= now) {
				this.data.delete(key);
			}
		}
	}

	// Call this when shutting down app to stop cleanup interval
	stopCleanup(): void {
		clearInterval(this.cleanupInterval);
	}
}

export const l1ValidationsStore = new L1ValidationsStore();
