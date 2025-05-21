import axios, {InternalAxiosRequestConfig} from "axios";

// Creating an axios instance to be used for all requests.
// This instance will be used to set up interceptors and other configurations.
const axiosInstance = axios.create();

// Ensuring that all environment variables are set.
const requiredEnvironmentVariables = [
    "DATA_BASE_URL",
    "CONFIG_SERVICE_URL",
    "MOCK_SERVER_URL",
    "API_SERVICE_KEY",
];

// Ensuring fail fast behavior.
for( const variable of requiredEnvironmentVariables) {
    if (!process.env[variable]) {
        throw new Error(`Environment variable ${variable} is not set. Please set it to avoid authentication failures.`);
    }
}

// Valid Service URLs
const apiKeyStore : string[] = [
    process.env.DATA_BASE_URL as string,
    process.env.CONFIG_SERVICE_URL as string,
    process.env.REPORTING_SERVICE as string,
    process.env.MOCK_SERVER_URL as string,
]

const apiServiceKey = process.env.API_SERVICE_KEY as string;
// Interceptor to populate headers with tokens.
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const url = config.url;
        const apiKey = apiKeyStore.find((key) => url?.startsWith(key));
        if (apiKey) {
            const token = apiServiceKey;
            if (token) {
                config.headers["x-api-key"] = token;
            }
        };
        return config;
    });

export default axiosInstance;