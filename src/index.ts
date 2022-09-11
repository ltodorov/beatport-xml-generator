import * as path from "node:path";
import * as fs from "node:fs";
import { parseXml } from "libxmljs2";
import { register } from "./helpers/register.js";
import { logError } from "./helpers/log-error.js";
import { readTemplate } from "./helpers/read-template.js";
import { readSchema } from "./helpers/read-schema.js";
import { writeFile } from "./helpers/write-file.js";

// Change the release data to generate a XML
import { release } from "./data/releases/nsr188.js";

const srcDir = path.resolve("src");
const catalogDir = path.resolve("catalogue");

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