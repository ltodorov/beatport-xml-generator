import { Release } from "./release";
import { release } from "../../mocks";

describe("Models: release", () => {
  it("Should create an instance of Release", () => {
    expect(release instanceof Release).toBe(true);
  });
});