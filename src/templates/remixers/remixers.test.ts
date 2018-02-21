import { templateRemixers } from "./remixers";
import { templateRemixer } from "../remixer";
import { track } from "../../mocks";

describe("Template: remixers", () => {
  it("Should return remixers wrapper", () => {
    const remixers = track.full.remixers;
    expect(templateRemixers(remixers)).toBe(`
      <trackRemixers>${remixers.reduce(templateRemixer, "")}
      </trackRemixers>`);
  });
});