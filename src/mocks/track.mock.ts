import { Track, GENRES } from "../models";

export const track = {
  full: new Track({
    ISRC: "GBLC20600101",
    title: "Stay",
    mixVersion: "DJ Tarkan & V-Sag Remix",
    artists: ["Drive"],
    remixers: ["DJ Tarkan", "V-Sag"],
    songwriters: ["Tarkan Ors", "Vasilis Sagonas"],
    genre: GENRES.ProgressiveHouse
  }),
  incomplete: new Track({
    ISRC: "GBLC20600102",
    title: "",
    mixVersion: "",
    artists: ["Drive"],
    remixers: [],
    songwriters: [],
    genre: GENRES.ProgressiveHouse
  })
};