import * as path from "path";
import * as fs from "fs";
import { compile, registerHelper } from "handlebars";
import { Template } from "./models/template";
import { customer } from "./data/customer";
import { release } from "./data/releases/nsr170";

const encoding = "utf8";

const templateFile = path.resolve(__dirname, "../src/template.hbs");
const catalogDir = path.resolve(__dirname, "../catalogue");
const outputFile = path.resolve(catalogDir, `${release.catalogNumber}.xml`);

registerHelper("trackNumber", (num: number) => num + 1);

registerHelper("safeValue", (defaultValue: string, value?: string) => value || defaultValue);

fs.readFile(templateFile, encoding, (err, data) => {
    err && throwError(err.message);

    const template = compile<Template>(data);
    const stream = template({
        ...customer,
        ...release
    });

    fs.access(catalogDir, err => {
        if (err) {
            fs.mkdir(catalogDir, err => {
                err && throwError(err.message);
                writeFile(outputFile, stream);
            });
        } else {
            writeFile(outputFile, stream);
        }
    });
});

function writeFile(fileName: string, data: string) {
    fs.writeFile(fileName, data, encoding, err => {
        err && throwError(err.message);
    });
}

function throwError(errMessage: string) {
    throw new Error(errMessage);
}