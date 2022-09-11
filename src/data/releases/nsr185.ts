import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 665275678721,
    catalogNumber: "NSR185",
    originalReleaseDate: "2022-04-15",
    title: "Mua",
    tracks: [{
        ISRC: "QZKWA2034123",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Mua",
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