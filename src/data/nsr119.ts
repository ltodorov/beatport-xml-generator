import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 119,
  originalReleaseDate: "2018-04-01",
  UPC_EAN: 192641017773,
  title: "Sometimes",
  tracks: [
    new Track({
      ISRC: "USA2P1802238",
      title: "Sometimes",
      mixVersion: "Original Mix",
      artists: ["Robert Cristian"],
      remixers: [],
      songwriters: ["Robert Cristian"],
      genre: GENRES.ProgressiveHouse
    }),
    new Track({
      ISRC: "USA2P1802239",
      title: "Sometimes",
      mixVersion: "Radio Edit",
      artists: ["Robert Cristian"],
      remixers: [],
      songwriters: ["Robert Cristian"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});