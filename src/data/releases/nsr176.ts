import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    albumAction: "update",
    UPC_EAN: 793519147303,
    catalogNumber: "NSR176",
    originalReleaseDate: "2021-06-15",
    title: "Lovely (Goda Brother Remix)",
    tracks: [{
        ISRC: "QZKWA2026707",
        artists: ["DJ Tarkan"],
        mixVersion: "Goda Brother Remix",
        title: "Lovely feat. Anduze",
        remixers: ["Goda Brother"],
        genre: Genres.ProgressiveHouse,
        songwriters: [{
            name: Artists["Goda Brother"],
            type: "author"
        }, {
            name: Artists["Goda Brother"],
            type: "composer"
        }]
    }]
}

export {
    release
};