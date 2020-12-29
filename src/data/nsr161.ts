import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 161,
  originalReleaseDate: "2021-01-31",
  UPC_EAN: 793519053161,
  title: "Moment (Ian Tosel & Arthur M Dub Remix)",
  tracks: [
    new Track({
      ISRC: "QZKWA2020514",
      title: "Moment feat. Alexandra McKay",
      mixVersion: "Ian Tosel & Arthur M Dub Remix",
      artists: ["DJ Tarkan"],
      remixers: ["Ian Tosel", "Arthur M"],
      songwriters: ["Ian Tosel", "Arthur M"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});