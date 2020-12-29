import { escapeHTML } from "../../helpers";

export function templateRemixer(acc: string, remixer: string) {
  return `${acc}
        <remixerName>${escapeHTML(remixer)}</remixerName>`;
}