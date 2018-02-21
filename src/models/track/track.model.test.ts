import { Track } from "./track.model";
import { track } from "../../mocks";

describe("Models: track", () => {
  it("Should create an instance of Track", () => {
    expect(track.full instanceof Track).toBe(true);
  });
});