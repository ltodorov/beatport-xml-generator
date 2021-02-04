import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 169,
  originalReleaseDate: "2021-05-15",
  UPC_EAN: 0,
  title: "Lovely feat. Anduze (Hiss Band Remix)",
  tracks: [
    new Track({
      ISRC: "",
      title: "Lovely feat. Anduze",
      mixVersion: "Hiss Band Remix",
      artists: ["DJ Tarkan"],
      remixers: ["Hiss Band"],
      songwriters: ["Hamid Reza Sadri"],
      genre: GENRES.DeepHouse
    })
  ]
});