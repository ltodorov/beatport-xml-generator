import chalk from "chalk";

function logError(error: unknown) {
    console.error(chalk.red(error));
}

export {
    logError
};