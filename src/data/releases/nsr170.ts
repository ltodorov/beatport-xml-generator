import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 793519119263,
    catalogNumber: "NSR170",
    originalReleaseDate: "2021-05-01",
    title: "Deep Down feat. Zara",
    tracks: [{
        ISRC: "QZKWA2025069",
        artists: ["DJ Tarkan"],
        mixVersion: "Tuna Ozdemir Remix",
        title: "Deep Down feat. Zara",
        remixers: ["Tuna Ozdemir"],
        genre: Genres.DeepHouse,
        songwriters: [{
            name: Artists["Tuna Ozdemir"],
            type: "author"
        }]
    }]
}

export {
    release
};