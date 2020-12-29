import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 160,
  originalReleaseDate: "2020-12-25",
  UPC_EAN: 793519027568,
  title: "Melancholic",
  tracks: [
    new Track({
      ISRC: "QZKWA2019154",
      title: "Melancholic",
      mixVersion: "Original Mix",
      artists: ["Er&Man"],
      remixers: [],
      songwriters: ["Erman Kasapbasi"],
      genre: GENRES.ProgressiveHouse
    }),
    new Track({
      ISRC: "QZKWA2019156",
      title: "Tell You",
      mixVersion: "Original Mix",
      artists: ["Er&Man"],
      remixers: [],
      songwriters: ["Erman Kasapbasi"],
      genre: GENRES.ProgressiveHouse
    }),
    new Track({
      ISRC: "QZKWA2019153",
      title: "Deeper",
      mixVersion: "Original Mix",
      artists: ["Er&Man"],
      remixers: [],
      songwriters: ["Erman Kasapbasi"],
      genre: GENRES.ProgressiveHouse
    }),
    new Track({
      ISRC: "QZKWA2019155",
      title: "Mysterious Dreams",
      mixVersion: "Original Mix",
      artists: ["Er&Man"],
      remixers: [],
      songwriters: ["Erman Kasapbasi"],
      genre: GENRES.ProgressiveHouse
    })
  ]
});