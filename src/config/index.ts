import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

interface IConfig {
  api: string;
}

const development: IConfig = {
  api: "http://localhost:1337",
};

const production: IConfig = { api: "http://localhost:1337" };

export const config =
  publicRuntimeConfig.NODE_ENV === "production" ? production : development;
