import fs from "node:fs";
import { encoding } from "../config.js";

function readSchema(file: string) {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(file, encoding, (err, data) => {
            if (err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        });
    });
}

export {
    readSchema
};