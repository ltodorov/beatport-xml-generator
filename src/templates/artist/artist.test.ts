import { templateArtist } from "./artist";
import { track } from "../../mocks";

describe("Template: artist", () => {
  it("Should return first artist name", () => {
    const artist = track.full.artists[0];
    const template = templateArtist("", artist);
    expect(template.trim()).toBe(`<artistName>${artist}</artistName>`);
  });
});