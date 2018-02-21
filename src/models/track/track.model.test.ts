import { Track } from "./track.model";
import { trackFull } from "../../mocks";

describe("Models: track", () => {
  it("Should create an instance of Track", () => {
    expect(trackFull instanceof Track).toBe(true);
  });
});