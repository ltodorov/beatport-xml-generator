import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 647625013017,
    catalogNumber: "NSR190",
    originalReleaseDate: "2022-10-28",
    title: "Hurricane",
    tracks: [{
        ISRC: "QZKWA2039519",
        artists: ["Boraa"],
        mixVersion: "Original Mix",
        title: "Hurricane",
        remixers: [],
        genre: Genres.ProgressiveHouse,
        songwriters: [{
            name: Artists["Boraa"],
            type: "author"
        }, {
            name: Artists["Boraa"],
            type: "composer"
        }]
    }]
};

export {
    release
};