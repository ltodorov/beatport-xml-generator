import { templateRemixer } from "../remixer";

export function templateRemixers(data: string[]) {
  return `
      <trackRemixers>${data.reduce(templateRemixer, "")}
      </trackRemixers>`;
}