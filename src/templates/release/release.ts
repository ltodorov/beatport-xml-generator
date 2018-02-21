import { Release, Track } from "../../models";
import { templateTrack } from "../track";

export function templateRelease(data: Release) {
  return `<?xml version="1.0" encoding="utf-8"?>
<release>
  <aggregatorName>NO SMOKING RECORDINGS</aggregatorName>
  <labelName>No Smoking Recordings</labelName>
  <UPC_EAN>${data.UPC_EAN}</UPC_EAN>
  <catalogNumber>NSR${data.id}</catalogNumber>
  <coverArtFilename>NSR${data.id}.png</coverArtFilename>
  <releaseTitle>${data.title}</releaseTitle>
  <releaseSalesType>release</releaseSalesType>
  <tracks>${data.tracks.reduce((acc: string, val: Track, index: number) =>
    templateTrack(acc, data, val, index), "")}
  </tracks>
</release>`;
}