export const parseBoolean = (value?: string): boolean =>
    value?.toLowerCase() === "true";

export const CONSTANTS = {
    FRONTEND_DOMEN: process.env.FRONTEND_DOMEN ?? "http://localhost:3000",
    IS_BETA: parseBoolean(process.env.NEXT_PUBLIC_IS_BETA) ?? true,
} as const;

