import * as fs from "fs";
import * as path from "path";
import { Release } from "../models";
import { templateRelease } from "../templates";

export class Parser {
  constructor(public release: Release) {
  }

  logError(err: Error | string) {
    throw err instanceof Error ? err : new Error(err);
  }

  checkFolder(folder: string) {
    fs.access(folder, err => {
      if (err) {
        this.writeFolder(folder);
      }
      this.writeFile(folder, this.release);
    });
  }

  writeFolder(folder: string) {
    fs.mkdir(folder, err => {
      err && this.logError(err);

      this.writeFile(folder, this.release);
    });
  }

  writeFile(folder: string, data: Release) {
    const file = path.resolve(folder, `NSR${data.id}.xml`);
    fs.writeFile(file, templateRelease(data), err => {
      err && this.logError(err);
    });
  }
}