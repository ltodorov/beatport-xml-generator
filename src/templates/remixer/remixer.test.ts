import { templateRemixer } from "./remixer";
import { track } from "../../mocks";

describe("Template: remixer", () => {
  it("Should return first remixer name", () => {
    const remixer = track.full.remixers[0];
    const template = templateRemixer("", remixer);
    expect(template.trim()).toBe(`<remixerName>${remixer}</remixerName>`);
  });
});