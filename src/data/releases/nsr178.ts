import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    albumAction: "update",
    UPC_EAN: 793519159290,
    catalogNumber: "NSR178",
    originalReleaseDate: "2021-07-16",
    title: "The Meaning (Burak Cilt Remix)",
    tracks: [{
        ISRC: "QZKWA2027637",
        artists: ["DJ Tarkan"],
        mixVersion: "Burak Cilt Remix",
        title: "The Meaning",
        remixers: ["Burak Cilt"],
        genre: Genres.DeepHouse,
        songwriters: [{
            name: Artists["Burak Cilt"],
            type: "author"
        }, {
            name: Artists["Burak Cilt"],
            type: "composer"
        }]
    }]
};

export {
    release
};