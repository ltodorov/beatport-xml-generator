import { Artists } from "./artists";
import { Genres } from "./genres";

interface Release {

    // Universal Product Code / European Article Number
    UPC_EAN: number;

    catalogNumber: string;

    // The originalReleaseDate field is in the format YYYY-MM-DD.
    // originalReleaseDate should be a future date ONLY if the material has never
    // been released on any other medium (Vinyl, CD, Digital, etc) in the past.
    // If the material has been available at any other time on any other medium,
    // you must use the date at which it originally became available for purchase.
    originalReleaseDate: string;

    // A title of the release
    title: string;

    // The following formats are accepted: wav and aif. The filename extension
    // must be .wav, .aif or .aiff. Quality must be 44.1KHz, 16-bit
    tracks: Track[];

    // https://beatportops.zendesk.com/hc/en-us/articles/224426768-Can-I-update-or-delete-my-release-via-XML-delivery-
    albumAction?: AlbumAction;

    description?: string;

    salesType?: "release" | "album";
}

interface Track {
    // ISO-3901 - International Standard Recording Code ISRC.
    // http://www.ifpi.org is the the ISRC registration authority.
    ISRC: string;

    artists: (keyof typeof Artists)[];

    // Recommend a genre or genre/subgenre for this particular track. This is
    // only a recommendation. Beatport reserves the right to determine the final
    // published genre and/or subgenre.
    genre: Genres;

    mixVersion: string;
    songwriters: Songwriter[];
    title: string;
    trackRemixers: (keyof typeof Artists)[];
    copyright?: string;
    exclusivePeriod?: number;
    originalReleaseDate?: string;
    trackPublisher?: string;
}

interface Songwriter {
    name: Artists;
    type: SongwriterType;
}

type SongwriterType = "author" | "composer" | "?";

/**
 * insert:
 * Create a new product that does not exist on the Beatport store, or re-deliver
 * a product with updated metadata and/or assets.
 *
 * update:
 * Automatically update existing metadata, audio, or artwork on a release or
 * track on Beatport. This action will not work to update removed/hidden content.
 * PLEASE NOTE, this action will only work to update existing tracks on a
 * release and cannot be used to ADD content/tracks to an existing release.
 *
 * delete:
 * Remove / take down a product. This action does not work on individual tracks,
 * it will only work on a full release / album. Please contact
 * contentsupport@beatport.com if you would like to take down individual tracks.
 */
type AlbumAction = "insert" | "update" | "delete";

export {
    Release
};