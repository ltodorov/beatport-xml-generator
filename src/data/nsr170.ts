import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 170,
  originalReleaseDate: "2021-06-01",
  UPC_EAN: 0,
  title: "Deep Down feat. Zara (Tuna Ozdemir Remix)",
  tracks: [
    new Track({
      ISRC: "",
      title: "Deep Down feat. Zara",
      mixVersion: "Tuna Ozdemir Remix",
      artists: ["DJ Tarkan"],
      remixers: ["Tuna Ozdemir"],
      songwriters: ["Tuna Ozdemir"],
      genre: GENRES.DeepHouse
    })
  ]
});