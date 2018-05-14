import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 124,
  originalReleaseDate: "2018-06-01",
  UPC_EAN: 192641092879,
  title: "Get Better Gurkan Asik Remix",
  tracks: [
    new Track({
      ISRC: "USA2P1830592",
      title: "Get Better feat. Yalena",
      mixVersion: "Gurkan Asik Remix",
      artists: ["DJ Tarkan"],
      remixers: ["Gurkan Asik"],
      songwriters: ["Gurkan Asik"],
      genre: GENRES.DeepHouse
    })
  ]
});