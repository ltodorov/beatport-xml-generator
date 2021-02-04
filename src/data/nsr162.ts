import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 162,
  originalReleaseDate: "2021-02-15",
  UPC_EAN: 793519061401,
  title: "Dreamscape",
  tracks: [
    new Track({
      ISRC: "QZKWA2021043",
      title: "Dreamscape",
      mixVersion: "Original Mix",
      artists: ["Atakan Ergin"],
      remixers: [],
      songwriters: ["Atakan Ergin"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});