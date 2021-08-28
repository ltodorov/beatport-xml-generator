import fs from "fs";
import { green } from "chalk";
import { encoding } from "../config";
import { logError } from "./log-error";

function writeFile(file: string, data: string) {
    fs.writeFile(file, data, encoding, err => {
        if (err) {
            logError(err.message);
            return;
        }

        console.log(green("Release has been generated successfully!"));
    });
}

export {
    writeFile
};