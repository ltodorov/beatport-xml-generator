import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 125,
  originalReleaseDate: "2018-07-15",
  UPC_EAN: 0,
  title: "Without You",
  tracks: [
    new Track({
      ISRC: "",
      title: "Without You",
      mixVersion: "Original Mix",
      artists: ["Mr. Nu"],
      remixers: [],
      songwriters: ["Nuri Ankarali"],
      genre: GENRES.DeepHouse
    }),
    new Track({
      ISRC: "",
      title: "Without You",
      mixVersion: "Almanah & Monoteq Remix",
      artists: ["Mr. Nu"],
      remixers: ["Almanah", "Monoteq"],
      songwriters: ["Almanah", "Monoteq"],
      genre: GENRES.DeepHouse
    }),
    new Track({
      ISRC: "",
      title: "Without You",
      mixVersion: "Melih Aydogan Remix",
      artists: ["Mr. Nu"],
      remixers: ["Melih Aydogan"],
      songwriters: ["Melih Aydogan"],
      genre: GENRES.DeepHouse
    })
  ]
});