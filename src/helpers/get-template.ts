import { readFile } from "node:fs/promises";
import Handlebars from "handlebars";
import { register } from "./register.js";
import type { Release } from "../models/release.js";
import type { Template } from "../models/template.js";
import { customer } from "../data/customer.js";

register();

async function getTemplate(file: string, release: Release, encoding: BufferEncoding) {
    const data = await readFile(file, { encoding });
    const template = Handlebars.compile<Template>(data);
    const xmlString = template({
        ...customer,
        ...release
    });

    return xmlString;
}

export {
    getTemplate
};