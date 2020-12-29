import { escapeHTML } from "../../helpers";

export function templateArtist(acc: string, artist: string) {
  return `${acc}
        <artistName>${escapeHTML(artist)}</artistName>`;
}