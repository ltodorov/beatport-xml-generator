import chalk from "chalk";

function logError(error: Error | string) {
    const message = error instanceof Error ?
        error.message :
        error;

    console.error(chalk.red(message));
}

export {
    logError
};