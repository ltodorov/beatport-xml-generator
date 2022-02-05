import * as path from "path";
import * as fs from "fs";
import { parseXml } from "libxmljs2";
import { register } from "./helpers/register";
import { logError } from "./helpers/log-error";
import { readTemplate } from "./helpers/read-template";
import { readSchema } from "./helpers/read-schema";
import { writeFile } from "./helpers/write-file";

// Change the release data to generate a XML
import { release } from "./data/releases/nsr186";

const srcDir = path.resolve(__dirname, "../src");
const catalogDir = path.resolve(__dirname, "../catalogue");

const schemaFile = path.resolve(srcDir, "schema.xsd");
const templateFile = path.resolve(srcDir, "template.hbs");
const outputFile = path.resolve(catalogDir, `${release.catalogNumber}.xml`);

register();

const readTemplatePromise = readTemplate(templateFile, release).catch(logError);
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
                        if (err) {
                            logError(err.message);
                            return;
                        }
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