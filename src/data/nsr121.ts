import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 121,
  originalReleaseDate: "2018-04-15",
  UPC_EAN: 192641057700,
  title: "Deep Dive",
  tracks: [
    new Track({
      ISRC: "USA2P1820002",
      title: "Deep Dive",
      mixVersion: "Original Mix",
      artists: ["DJ Tarkan"],
      remixers: [],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.DeepHouse
    })
  ]
});