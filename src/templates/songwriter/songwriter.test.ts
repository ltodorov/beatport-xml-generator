import { templateSongwriter } from "./songwriter";
import { track } from "../../mocks";

describe("Template: songwriter", () => {
  it("Should return songwriters", () => {
    const songwriter = track.full.songwriters[0];
    expect(templateSongwriter("", songwriter).trim()).toBe(`<songwriter>
          <name>${songwriter}</name>
          <type>author</type>
        </songwriter>`);
  });
});