import fs from "fs";
import Handlebars from "handlebars";
import { encoding } from "../config";
import { Template } from "../models/template";
import { Release } from "../models/release";
import { customer } from "../data/customer";

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