import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 163,
  originalReleaseDate: "2021-02-15",
  UPC_EAN: 793519065034,
  title: "Infectious Love (Tamer Kaan Remix)",
  tracks: [
    new Track({
      ISRC: "QZKWA2021310",
      title: "Infectious Love feat. Megan Kashat",
      mixVersion: "Tamer Kaan Remix",
      artists: ["DJ Tarkan", "Megan Kashat"],
      remixers: ["Tamer Kaan"],
      songwriters: ["Tamer Kaan"],
      genre: GENRES.DeepHouse
    })
  ]
});