import dotenv from "dotenv";
import core from "@actions/core";

dotenv.config();

const {IS_DEV, ATLAN_INSTANCE_URL, ATLAN_API_TOKEN} = process.env;

export const isDev = () => IS_DEV === "true";
export const getInstanceUrl = () => {
    if (ATLAN_INSTANCE_URL) return new URL(ATLAN_INSTANCE_URL).origin;
    return new URL(core.getInput("ATLAN_INSTANCE_URL")).origin;
};
export const getAPIToken = () => {
    if (ATLAN_API_TOKEN) return ATLAN_API_TOKEN;
    return core.getInput("ATLAN_API_TOKEN");
}