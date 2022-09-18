import { Artists } from "../../models/artists.js";
import { Genres } from "../../models/genres.js";
import type { Release } from "../../models/release.js";

const release: Release = {
    UPC_EAN: 665275812613,
    catalogNumber: "NSR188",
    originalReleaseDate: "2022-07-15",
    title: "The Meaning (Muratt Mat Remix)",
    tracks: [{
        ISRC: "QZKWA2037244",
        artists: ["DJ Tarkan"],
        mixVersion: "Muratt Mat Remix",
        title: "The Meaning",
        remixers: ["Muratt Mat"],
        genre: Genres.ProgressiveHouse,
        songwriters: [{
            name: Artists["Muratt Mat"],
            type: "author"
        }, {
            name: Artists["Muratt Mat"],
            type: "composer"
        }]
    }]
};

export {
    release
};