import { Release } from "../models";
import { track } from "./track.mock";

export const release = new Release({
  id: 100,
  originalReleaseDate: "2006-05-15",
  UPC_EAN: 889326743583,
  title: "Stay",
  tracks: [track.full, track.incomplete]
});