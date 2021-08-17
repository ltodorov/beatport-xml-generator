import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 793519198770,
    catalogNumber: "NSR180",
    originalReleaseDate: "2021-09-17",
    title: "Noa",
    tracks: [{
        ISRC: "QZKWA2029828",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Noa",
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