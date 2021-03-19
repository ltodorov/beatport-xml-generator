import { Artists } from "../../models/artists";
import { Genres } from "../../models/genres";
import { Release } from "../../models/release";

const release: Release = {
    UPC_EAN: 793519115999,
    catalogNumber: "NSR169",
    originalReleaseDate: "2021-04-15",
    title: "Lovely feat. Anduze (Hiss Band Remix)",
    tracks: [{
        ISRC: "QZKWA2025069",
        artists: ["DJ Tarkan"],
        mixVersion: "Hiss Band Remix",
        title: "Lovely feat. Anduze",
        trackRemixers: ["Hiss Band"],
        genre: Genres.DeepHouse,
        songwriters: [{
            name: Artists["Hiss Band"],
            type: "author"
        }]
    }]
}

export {
    release
};