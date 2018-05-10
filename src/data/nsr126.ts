import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 126,
  originalReleaseDate: "2018-07-01",
  UPC_EAN: 192641100307,
  title: "Sunshine",
  tracks: [
    new Track({
      ISRC: "USA2P1833385",
      title: "Sunshine",
      mixVersion: "Original Mix",
      artists: ["DJ Tarkan"],
      remixers: [],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});