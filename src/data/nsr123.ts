import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 123,
  originalReleaseDate: "2018-05-15",
  UPC_EAN: 192641092343,
  title: "Deep Down",
  tracks: [
    new Track({
      ISRC: "USA2P1830336",
      title: "Deep Down feat. Zara",
      mixVersion: "RoelBeat Remix",
      artists: ["DJ Tarkan"],
      remixers: ["RoelBeat"],
      songwriters: ["Maxim Poduschenko"],
      genre: GENRES.DeepHouse
    })
  ]
});