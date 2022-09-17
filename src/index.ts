import { resolve } from "node:path";
import { argv, exit } from "node:process";
import { access, mkdir } from "node:fs/promises";
import { parseXml } from "libxmljs2";
import type { ReleaseModule } from "./models/release.js";
import { getTemplate } from "./helpers/get-template.js";
import { getSchema } from "./helpers/get-schema.js";
import { logError } from "./helpers/log-error.js";
import { setFile } from "./helpers/set-file.js";

const inputDataName = argv[2];

if (!inputDataName) {
    logError("Please provide a valid release number!");
    exit(1);
}

import(
    `./data/releases/${inputDataName}.js`
).then(({ release }: ReleaseModule) => {
    const srcDir = resolve("src");
    const schemaFile = resolve(srcDir, "schema.xsd");
    const templateFile = resolve(srcDir, "template.hbs");
    const getTemplatePromise = getTemplate(templateFile, release);
    const getSchemaPromise = getSchema(schemaFile,);

    Promise.all([getTemplatePromise, getSchemaPromise])
        .then(([xmlString, xsdString]) => {
            if (!xmlString || !xsdString) {
                return;
            }

            const xmlDoc = parseXml(xmlString);
            const xsdDoc = parseXml(xsdString);

            if (xmlDoc.validate(xsdDoc)) {
                const catalogDir = resolve("catalogue");
                const outputFile = resolve(
                    catalogDir,
                    `${release.catalogNumber}.xml`
                );
                access(catalogDir).then(() => {
                    setFile(outputFile, xmlString);
                }).catch(() => {
                    mkdir(catalogDir).then(() => {
                        setFile(outputFile, xmlString);
                    }).catch(logError);
                });
            } else {
                logError("XML validation has been failed!");
            }
        })
        .catch(logError);
}).catch(logError);