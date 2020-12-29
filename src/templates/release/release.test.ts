import { templateRelease } from "./release";
import { templateTrack } from "../track";
import { release } from "../../mocks";
import { Release } from "../../models";

describe("Templates: release", () => {
  it("Should return a release template", () => {
    expect(templateRelease(release)).toBe(`<?xml version="1.0" encoding="utf-8"?>
<release>
  <aggregatorName>NO SMOKING RECORDINGS</aggregatorName>
  <labelName>No Smoking Recordings</labelName>
  <UPC_EAN>${release.UPC_EAN}</UPC_EAN>
  <catalogNumber>NSR${release.id}</catalogNumber>
  <coverArtFilename>NSR${release.id}.jpg</coverArtFilename>
  <releaseTitle>${release.title}</releaseTitle>
  <releaseSalesType>release</releaseSalesType>
  <tracks>${release.tracks.reduce((acc, val, index) =>
    templateTrack(acc, release, val, index), "")}
  </tracks>
</release>`);
  });

  it("Should return a release template if UPC_EAN is 0", () => {
    expect(templateRelease({
      ...release,
      UPC_EAN: 0
    })).toBe(`<?xml version="1.0" encoding="utf-8"?>
<release>
  <aggregatorName>NO SMOKING RECORDINGS</aggregatorName>
  <labelName>No Smoking Recordings</labelName>
  <UPC_EAN></UPC_EAN>
  <catalogNumber>NSR${release.id}</catalogNumber>
  <coverArtFilename>NSR${release.id}.jpg</coverArtFilename>
  <releaseTitle>${release.title}</releaseTitle>
  <releaseSalesType>release</releaseSalesType>
  <tracks>${release.tracks.reduce((acc, val, index) =>
    templateTrack(acc, release, val, index), "")}
  </tracks>
</release>`);
  });
});