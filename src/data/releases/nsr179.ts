import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 793519168070,
    catalogNumber: "NSR179",
    originalReleaseDate: "2021-07-30",
    title: "Rin Tin Tin (Sezer Ulker Remix)",
    tracks: [{
        ISRC: "QZKWA2028308",
        artists: ["DJ Tarkan"],
        mixVersion: "Sezer Ulker Remix",
        title: "Rin Tin Tin",
        remixers: ["Sezer Ulker"],
        genre: Genres.House,
        songwriters: [{
            name: Artists["Sezer Ulker"],
            type: "author"
        }, {
            name: Artists["Sezer Ulker"],
            type: "composer"
        }]
    }]
}

export {
    release
};