import { red } from "chalk";

function logError(error: Error | string) {
    const message = error instanceof Error ?
        error.message :
        error;

    console.error(red(message));
}

export {
    logError
};