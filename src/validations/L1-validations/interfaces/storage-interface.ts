/**
 * Storage interface for persisting and retrieving key-value data.
 *
 * @remarks
 * **Purpose** — Provides a standardized abstraction layer for storage operations
 * that can be implemented by different storage backends (Redis, Memory, File, etc.).
 *
 * **Implementation Notes**:
 * - All operations are asynchronous and return Promises
 * - Keys should be strings and values are stored as strings
 * - Implementations should handle serialization/deserialization as needed
 * - Prefix-based operations allow for namespacing and bulk operations
 *
 * @example
 * ```ts
 * class RedisStorage implements StorageInterface {
 *   async saveKey(uniquePrefix: string, key: string, value: string): Promise<void> {
 *     const fullKey = `${uniquePrefix}:${key}`;
 *     await this.redisClient.set(fullKey, value);
 *   }
 *   // ... other methods
 * }
 *
 * const storage = new RedisStorage();
 * await storage.saveKey("app1", "user:123", JSON.stringify(userData));
 * const user = JSON.parse(await storage.getKey("app1", "user:123"));
 * ```
 */
export default interface StorageInterface {
    /**
     * Save a key-value pair to storage with a unique prefix for namespacing.
     *
     * @param uniquePrefix - A unique identifier/namespace prefix to prevent key collisions
     * @param key - The unique identifier for the stored value within the prefix namespace
     * @param value - The string value to store
     * @returns Promise that resolves when the operation completes
     *
     * @example
     * ```ts
     * await storage.saveKey("app1", "session:abc123", JSON.stringify(sessionData));
     * ```
     */
    saveKey(uniquePrefix: string, key: string, value: string): Promise<void>;

    /**
     * Retrieve a value by its key from storage within a specific namespace.
     *
     * @param uniquePrefix - The unique identifier/namespace prefix used when storing
     * @param key - The unique identifier for the value to retrieve within the prefix namespace
     * @returns Promise that resolves to the stored value
     * @throws Should throw an error if the key does not exist
     *
     * @example
     * ```ts
     * const sessionData = await storage.getKey("app1", "session:abc123");
     * ```
     */
    getKey(uniquePrefix: string, key: string): Promise<string>;

    /**
     * Remove a key-value pair from storage within a specific namespace.
     *
     * @param uniquePrefix - The unique identifier/namespace prefix used when storing
     * @param key - The unique identifier for the value to delete within the prefix namespace
     * @returns Promise that resolves when the deletion completes
     *
     * @example
     * ```ts
     * await storage.deleteKey("app1", "session:abc123");
     * ```
     */
    deleteKey(uniquePrefix: string, key: string): Promise<void>;

    /**
     * List all keys within a specific namespace/prefix.
     *
     * @param uniquePrefix - The unique identifier/namespace prefix to list keys from
     * @returns Promise that resolves to an array of keys within that namespace
     *
     * @example
     * ```ts
     * const app1Keys = await storage.listKeys("app1");
     * // Returns keys stored under the "app1" namespace
     * // e.g., ["session:abc123", "user:456", "config:settings"]
     * ```
     */
    listKeys(uniquePrefix: string): Promise<string[]>;

    /**
     * Clear all stored data from the storage backend.
     *
     * @remarks
     * **Warning** — This operation is destructive and cannot be undone.
     * Use with caution, especially in production environments.
     *
     * @returns Promise that resolves when all data has been cleared
     *
     * @example
     * ```ts
     * await storage.clearStorage(); // All data is now removed
     * ```
     */
    clearStorage(): Promise<void>;

    /**
     * Check if a key exists in storage within a specific namespace.
     *
     * @param uniquePrefix - The unique identifier/namespace prefix to check within
     * @param key - The unique identifier to check for existence within the prefix namespace
     * @returns Promise that resolves to true if the key exists, false otherwise
     *
     * @example
     * ```ts
     * const exists = await storage.keyExists("app1", "user:123");
     * if (exists) {
     *   const userData = await storage.getKey("app1", "user:123");
     * }
     * ```
     */
    keyExists(uniquePrefix: string, key: string): Promise<boolean>;
}
