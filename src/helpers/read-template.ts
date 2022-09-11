import fs from "node:fs";
import Handlebars from "handlebars";
import { encoding } from "../config.js";
import type { Template } from "../models/template.js";
import type { Release } from "../models/release.js";
import { customer } from "../data/customer.js";

function readTemplate(file: string, release: Release) {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(file, encoding, (err, data) => {
            if (err) {
                reject(err.message);
            } else {
                const template = Handlebars.compile<Template>(data);
                const xmlString = template({
                    ...customer,
                    ...release
                });

                resolve(xmlString);
            }
        });
    });
}

export {
    readTemplate
};