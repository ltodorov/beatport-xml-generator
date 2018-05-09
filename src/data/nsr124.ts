import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 124,
  originalReleaseDate: "2018-06-01",
  UPC_EAN: 0,
  title: "Deep Down",
  tracks: [
    new Track({
      ISRC: "",
      title: "Deep Down feat. Zara",
      mixVersion: "RoelBeat Remix",
      artists: ["DJ Tarkan"],
      remixers: ["RoelBeat"],
      songwriters: ["Maxim Poduschenko"],
      genre: GENRES.DeepHouse
    })
  ]
});