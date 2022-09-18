import { writeFile } from "node:fs/promises";
import chalk from "chalk";
import { encoding } from "../config.js";
import { logError } from "./log-error.js";

function setFile(file: string, data: string) {
    writeFile(file, data, {
        encoding
    }).then(() => {
        console.log(chalk.green(`${file} has been generated!`));
    }).catch(err => {
        logError(err.message);
    });
}

export {
    setFile
};