export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";
export const isTest = process.env.NODE_ENV === "test";

export const MODE = process.env.MODE ?? "prod";

export const isCustomDev = MODE === "dev";