import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 793519155261,
    catalogNumber: "NSR177",
    originalReleaseDate: "2021-07-02",
    title: "One Day",
    tracks: [{
        ISRC: "QZKWA2027263",
        artists: ["DJ Tarkan", "Nathalie Bru"],
        mixVersion: "Original Mix",
        title: "One Day",
        remixers: [],
        genre: Genres.DeepHouse,
        songwriters: [{
            name: Artists["DJ Tarkan"],
            type: "author"
        }, {
            name: Artists["DJ Tarkan"],
            type: "composer"
        }, {
            name: Artists["Nathalie Bru"],
            type: "author"
        }, {
            name: Artists["Nathalie Bru"],
            type: "lyricist"
        }]
    }]
};

export {
    release
};