import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 665275504099,
    catalogNumber: "NSR182",
    originalReleaseDate: "2021-11-12",
    title: "Vea",
    tracks: [{
        ISRC: "QZKWA2030048",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Vea",
        remixers: [],
        genre: Genres.TechHouse,
        songwriters: [{
            name: Artists["DJ Tarkan"],
            type: "author"
        }, {
            name: Artists["DJ Tarkan"],
            type: "composer"
        }]
    }]
};

export {
    release
};