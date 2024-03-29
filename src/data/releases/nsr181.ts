import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 793519199371,
    catalogNumber: "NSR181",
    originalReleaseDate: "2021-10-15",
    title: "Yesa",
    tracks: [{
        ISRC: "QZKWA2029880",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Yesa",
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