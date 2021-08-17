import * as path from "path";
import * as fs from "fs";
import { red, green } from "chalk";
import { compile, registerHelper } from "handlebars";
import { parseXml } from "libxmljs2";
import { SalesType } from "./models/release";
import { Template } from "./models/template";
import { customer } from "./data/customer";
import { release } from "./data/releases/nsr180";

const encoding = "utf8";

const srcDir = path.resolve(__dirname, "../src");
const catalogDir = path.resolve(__dirname, "../catalogue");

const schemaFile = path.resolve(srcDir, "schema.xsd");
const templateFile = path.resolve(srcDir, "template.hbs");
const outputFile = path.resolve(catalogDir, `${release.catalogNumber}.xml`);

registerHelper("trackNumber", (num: number) => num + 1);

registerHelper("optionalValue", (defaultValue: string, value?: string) => value || defaultValue);

registerHelper("albumOnly", (salesType: SalesType | undefined) => salesType === "album" ? 1 : 0);

function readTemplate(file: string) {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(file, encoding, (err, data) => {
            if (err) {
                reject(err.message);
            } else {
                const template = compile<Template>(data);
                const xmlString = template({
                    ...customer,
                    ...release
                });

                resolve(xmlString);
            }
        });
    });
}

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

function writeFile(file: string, data: string) {
    fs.writeFile(file, data, encoding, err => {
        err && throwError(err.message);

        console.log(green("Release has been generated successfully!"));
    });
}

function throwError(errMessage: string) {
    throw new Error(errMessage);
}

function logError(errMessage: string) {
    console.error(red(errMessage));
}

const readTemplatePromise = readTemplate(templateFile).catch(logError);
const readSchemaPromise = readSchema(schemaFile).catch(logError);

Promise.all([readTemplatePromise, readSchemaPromise])
    .then(([xmlString, xsdString]) => {
        if (!xmlString || !xsdString) {
            return;
        }

        const xmlDoc = parseXml(xmlString);
        const xsdDoc = parseXml(xsdString);

        if (xmlDoc.validate(xsdDoc)) {
            fs.access(catalogDir, err => {
                if (err) {
                    fs.mkdir(catalogDir, err => {
                        err && throwError(err.message);
                        writeFile(outputFile, xmlString);
                    });
                } else {
                    writeFile(outputFile, xmlString);
                }
            });
        } else {
            logError("XML validation has been failed!");
        }
    })
    .catch(logError);