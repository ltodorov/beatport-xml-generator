import Handlebars from "handlebars";
import { SalesType } from "../models/release";

function register() {
    Handlebars.registerHelper(
        "trackNumber",
        (num: number) => num + 1
    );

    Handlebars.registerHelper(
        "optionalValue",
        (defaultValue: string, value?: string) => value || defaultValue
    );

    Handlebars.registerHelper(
        "albumOnly",
        (salesType: SalesType | undefined) => salesType === "album" ? 1 : 0
    );
}

export {
    register
};