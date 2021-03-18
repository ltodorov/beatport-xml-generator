import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 169,
  originalReleaseDate: "2021-04-15",
  UPC_EAN: 793519115999,
  title: "Lovely feat. Anduze (Hiss Band Remix)",
  tracks: [
    new Track({
      ISRC: "QZKWA2024865",
      title: "Lovely feat. Anduze",
      mixVersion: "Hiss Band Remix",
      artists: ["DJ Tarkan"],
      remixers: ["Hiss Band"],
      songwriters: ["Hamid Reza Sadri"],
      genre: GENRES.DeepHouse
    })
  ]
});