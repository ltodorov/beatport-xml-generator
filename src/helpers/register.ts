import Handlebars from "handlebars";
import type { SalesType } from "../models/release.js";

function register() {
    Handlebars.registerHelper(
        "trackNumber",
        (num: number) => num + 1
    );

    Handlebars.registerHelper(
        "optionalValue",
        (defaultValue: string, value?: string) => value ?? defaultValue
    );

    Handlebars.registerHelper(
        "albumOnly",
        (salesType?: SalesType) => salesType === "album" ? 1 : 0
    );
}

export {
    register
};