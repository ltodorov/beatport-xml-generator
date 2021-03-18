import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 142,
  originalReleaseDate: "2019-07-01",
  UPC_EAN: 0,
  title: "Atsalon",
  tracks: [
    new Track({
      ISRC: "GBLC21914201",
      title: "Atsalon",
      mixVersion: "Original Mix",
      artists: ["DJ Tarkan", "V-Sag"],
      remixers: [],
      songwriters: ["Tarkan Ors", "Vasilis Sagonas"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});