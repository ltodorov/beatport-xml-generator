import { readFile } from "node:fs/promises";
import { encoding } from "../config.js";

function getSchema(file: string) {
    return readFile(file, {
        encoding
    });
}

export {
    getSchema
};