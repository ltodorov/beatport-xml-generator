import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 126,
  originalReleaseDate: "2018-07-01",
  UPC_EAN: 0,
  title: "Sunshine",
  tracks: [
    new Track({
      ISRC: "",
      title: "Sunshine",
      mixVersion: "Original Mix",
      artists: ["DJ Tarkan"],
      remixers: [],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});