import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 665275678578,
    catalogNumber: "NSR184",
    originalReleaseDate: "2022-03-11",
    title: "Hia",
    tracks: [{
        ISRC: "QZKWA2034122",
        artists: ["DJ Tarkan"],
        mixVersion: "Original Mix",
        title: "Hia",
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