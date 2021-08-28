import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 665275504303,
    catalogNumber: "NSR183",
    originalReleaseDate: "2021-12-10",
    title: "Zea",
    tracks: [{
        ISRC: "QZKWA2030049",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Zea",
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