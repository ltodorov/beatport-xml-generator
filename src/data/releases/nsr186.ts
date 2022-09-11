import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 665275678981,
    catalogNumber: "NSR186",
    originalReleaseDate: "2022-05-13",
    title: "Kia",
    tracks: [{
        ISRC: "QZKWA2034124",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Kia",
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
}

export {
    release
};