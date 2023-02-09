import { resolve } from "node:path";
import { argv, exit } from "node:process";
import { readFile, access, mkdir, writeFile } from "node:fs/promises";
import { parseXml } from "libxmljs2";
import chalk from "chalk";
import type { ReleaseModule } from "./models/release.js";
import { encoding } from "./config.js";
import { getTemplate } from "./helpers/get-template.js";
import { logError } from "./helpers/log-error.js";

const inputDataName = argv[2];

if (!inputDataName) {
    logError(new Error("Missing release number! Ex. `npm run build nsr190`"));
    exit(1);
}

import(
    `./data/releases/${inputDataName}.js`
).then(async ({ release }: ReleaseModule) => {
    const srcDir = resolve("src");
    const schemaFile = resolve(srcDir, "schema.xsd");
    const templateFile = resolve(srcDir, "template.hbs");
    const getTemplatePromise = getTemplate(templateFile, release, encoding);
    const getSchemaPromise = readFile(schemaFile, { encoding });
    const [xmlString, xsdString] = await Promise.all([getTemplatePromise, getSchemaPromise]);

    if (!xmlString || !xsdString) {
        throw new Error("Could not read the schema or the template!");
    }

    const xmlDoc = parseXml(xmlString);
    const xsdDoc = parseXml(xsdString);

    if (!xmlDoc.validate(xsdDoc)) {
        throw new Error("Could not validate the XML!");
    }

    const catalogDir = resolve("catalogue");
    const outputFile = resolve(
        catalogDir,
        `${release.catalogNumber}.xml`
    );
    await access(catalogDir).catch(() => mkdir(catalogDir));
    await writeFile(outputFile, xmlString, {
        encoding,
    });
    console.log(chalk.green(`${outputFile} has been generated!`));
}).catch(logError);