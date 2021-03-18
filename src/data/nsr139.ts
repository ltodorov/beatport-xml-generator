import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 139,
  originalReleaseDate: "2019-03-01",
  UPC_EAN: 192641266003,
  title: "Robot City",
  tracks: [
    new Track({
      ISRC: "USA2P1912370",
      title: "Robot City",
      mixVersion: "Original Mix",
      artists: ["DJ Tarkan", "V-Sag"],
      remixers: [],
      songwriters: ["Tarkan Ors", "Vasilis Sagonas"],
      genre: GENRES.ProgressiveHouse
    }),
    new Track({
      ISRC: "USA2P1912371",
      title: "Robot City",
      mixVersion: "Short Ending",
      artists: ["DJ Tarkan", "V-Sag"],
      remixers: [],
      songwriters: ["Tarkan Ors", "Vasilis Sagonas"],
      genre: GENRES.ProgressiveHouse
    }),
    new Track({
      ISRC: "USA2P1912372",
      title: "Robot City",
      mixVersion: "Tebra Remix",
      artists: ["DJ Tarkan", "V-Sag"],
      remixers: ["Tebra"],
      songwriters: ["Milojko Jaric"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});