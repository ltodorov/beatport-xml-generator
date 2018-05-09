import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 125,
  originalReleaseDate: "2018-05-20",
  UPC_EAN: 0,
  title: "Reflection",
  tracks: [
    new Track({
      ISRC: "GBLC21812501",
      title: "Reflection feat. Gautier",
      mixVersion: "Original Mix",
      artists: ["DJ Tarkan"],
      remixers: [],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.DeepHouse
    }),
    new Track({
      ISRC: "GBLC21812502",
      title: "Reflection feat. Gautier",
      mixVersion: "Extended Mix",
      artists: ["DJ Tarkan"],
      remixers: [],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.DeepHouse
    })
  ]
});