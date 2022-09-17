import { readFile } from "node:fs/promises";
import Handlebars from "handlebars";
import { register } from "./register.js";
import type { Release } from "../models/release.js";
import type { Template } from "../models/template.js";
import { encoding } from "../config.js";
import { customer } from "../data/customer.js";

register();

function getTemplate(file: string, release: Release) {
    return new Promise<string>((resolve, reject) => {
        readFile(file, {
            encoding
        }).then(data => {
            const template = Handlebars.compile<Template>(data);
            const xmlString = template({
                ...customer,
                ...release
            });

            resolve(xmlString);
        }).catch(err => {
            reject(err);
        });
    });
}

export {
    getTemplate
};