import { escapeHTML } from "./escapeHTML";

describe("escapeHTML", () => {
    it("should convert & to &amp;", () => {
        expect(escapeHTML("DJ Tarkan & V-Sag")).toBe("DJ Tarkan &amp; V-Sag");
    });
});