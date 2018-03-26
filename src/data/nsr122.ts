import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 122,
  originalReleaseDate: "2018-04-04",
  UPC_EAN: 0,
  title: "Loved By You ft. Ria",
  tracks: [
    new Track({
      ISRC: "GBLC21812201",
      title: "Loved By You ft. Ria",
      mixVersion: "DJ Tarkan Remix",
      artists: ["Melih Aydogan"],
      remixers: ["DJ Tarkan"],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.DeepHouse
    }),
    new Track({
      ISRC: "GBLC21812202",
      title: "Loved By You ft. Ria",
      mixVersion: "DJ Tarkan Remix - Radio Edit",
      artists: ["Melih Aydogan"],
      remixers: ["DJ Tarkan"],
      songwriters: ["Tarkan Ors"],
      genre: GENRES.DeepHouse
    })
  ]
});