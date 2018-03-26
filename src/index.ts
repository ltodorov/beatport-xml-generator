import * as fs from "fs";
import * as path from "path";
import { Parser } from "./parser";
import { templateRelease } from "./templates";
import { release } from "./data/nsr122";

const folder = path.resolve(__dirname, "../catalogue");
const parser = new Parser(release);
parser.checkFolder(folder);