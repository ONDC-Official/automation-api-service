import StorageInterface from "../interfaces/storage-interface";
import { StorageConfig } from "../types/storage-types";
async function saveData(
    uniquePrefix: string,
    key: string,
    saveData: string,
    store: StorageInterface,
    config: StorageConfig,
) {
    const finalKey = `${uniquePrefix}:${key}`;
    const retryTimes = config.retryAttempts;
    const delayMs = config.retryDelayMs;
    let attempts = 0;
    while (attempts < retryTimes) {
        try {
            await store.saveKey(uniquePrefix, finalKey, saveData);
            return;
        } catch (e) {
            attempts++;
            if (attempts >= retryTimes) {
                throw e;
            }
            await new Promise((res) => setTimeout(res, delayMs));
        }
    }
}

function createKey(uniquePrefix: string, key: string) {
    return `${uniquePrefix}:${key}`;
}

export default {
    saveData,
    createKey,
};
