import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 665275684906,
    catalogNumber: "NSR187",
    originalReleaseDate: "2022-03-11",
    title: "Afro Ritual",
    tracks: [{
        ISRC: "QZKWA2034297",
        artists: ["Mert Yenidunya"],
        mixVersion: "Original Mix",
        title: "Afro Ritual",
        remixers: [],
        genre: Genres.AfroHouse,
        songwriters: [{
            name: Artists["Mert Yenidunya"],
            type: "author"
        }, {
            name: Artists["Mert Yenidunya"],
            type: "composer"
        }]
    }]
};

export {
    release
};