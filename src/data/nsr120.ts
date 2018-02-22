import { Release, Track, GENRES } from "../models";

export const release = new Release({
  id: 120,
  originalReleaseDate: "2018-04-01",
  UPC_EAN: 192641029974,
  title: "Lose Control",
  tracks: [
    new Track({
      ISRC: "GBLC21812001",
      title: "Lose Control feat. Vika Tendery",
      mixVersion: "Original Mix",
      artists: ["RoelBeat"],
      remixers: [],
      songwriters: ["Maxim Poduschenko"],
      genre: GENRES.TechHouse
    })
  ]
});