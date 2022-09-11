import fs from "node:fs";
import chalk from "chalk";
import { encoding } from "../config.js";
import { logError } from "./log-error.js";

function writeFile(file: string, data: string) {
    fs.writeFile(file, data, encoding, err => {
        if (err) {
            logError(err.message);
            return;
        }

        console.log(chalk.green(`${file} has been generated!`));
    });
}

export {
    writeFile
};