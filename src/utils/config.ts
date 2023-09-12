import * as dotenv from "dotenv";
dotenv.config();

export const isDev: boolean = process.env.NODE_ENV !== "production";

export const appPort: number = parseInt(process.env.APP_PORT as string) ?? 8080;
export const appHost: string = process.env.APP_HOST ?? "0.0.0.0";

export const requiredEnv = (key: string) => {
  if (
    process.env[key] == undefined ||
    process.env[key] == null ||
    process.env[key] == ""
  )
    throw new Error(
      `unable to get required environment vars "${key}", check your env`
    );

  return process.env[key] as string;
};
