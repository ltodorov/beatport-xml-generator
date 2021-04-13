import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 793519137885,
    catalogNumber: "NSR171",
    originalReleaseDate: "2021-05-15",
    title: "Arezu",
    tracks: [{
        ISRC: "QZKWA2026120",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Arezu",
        remixers: [],
        genre: Genres.ProgressiveHouse,
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