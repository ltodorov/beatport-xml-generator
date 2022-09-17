import type { Artists } from "./artists.js";
import type { Genres } from "./genres.js";
import type { Country } from "./country.js";

interface ReleaseModule {
    release: Release;
}

interface Release {

    // Universal Product Code / European Article Number.
    UPC_EAN: number;

    // Catalog numbers should have unique value for every release in
    // your catalog.
    catalogNumber: string;

    // The originalReleaseDate field is in the format YYYY-MM-DD.
    // originalReleaseDate should be a future date ONLY if the material has
    // never been released on any other medium (Vinyl, CD, Digital, etc) in
    // the past. If the material has been available at any other time on any
    // other medium, you must use the date at which it originally became
    // available for purchase.
    originalReleaseDate: string;

    // A title of the release
    title: string;

    // The following formats are accepted: wav and aif. The filename extension
    // must be .wav, .aif or .aiff. Quality must be 44.1KHz, 16-bit
    tracks: Track[];

    // https://beatportops.zendesk.com/hc/en-us/articles/224426768-Can-I-update-or-delete-my-release-via-XML-delivery-
    //
    // Product offer action, either insert, update or delete.
    //
    // insert:
    // Create a new product that does not exist on the Beatport store, or
    // re-deliver a product with updated metadata and/or assets.
    //
    // update:
    // Automatically update existing metadata, audio, or artwork on a release or
    // track on Beatport. This action will not work to update
    // removed/hidden content.
    // PLEASE NOTE, this action will only work to update existing tracks on a
    // release and cannot be used to ADD content/tracks to an existing release.
    //
    // delete:
    // Remove / take down a product. This action does not work on individual
    // tracks, it will only work on a full release / album. Please contact
    // contentsupport@beatport.com if you would like to take down
    // individual tracks.
    albumAction?: AlbumAction;

    // Description might include: Promotional feedback, Artists currently
    // supporting the release, Biographies of the producers/artists, and/or
    // Copyright and publishing information. The release description is
    // displayed on Beatport's website.
    description?: string;

    // Describes the sales type for this release. "release" is the default,
    // and allows all tracks to be downloaded individually or as a full
    // release. "album" prevents tracks from being downloaded individually.
    // "mix" releases will show up on the "mixes" tab. If unsure, use "release".
    salesType?: SalesType;
}

interface Track {
    // ISO-3901 - International Standard Recording Code ISRC.
    // http://www.ifpi.org is the the ISRC registration authority.
    ISRC: string;

    // List artists one per node and NOT as a node containing a comma separated
    // list of multiple artists.
    artists: (keyof typeof Artists)[];

    // Recommend a genre or genre/subgenre for this particular track. This is
    // only a recommendation. Beatport reserves the right to determine the final
    // published genre and/or subgenre.
    genre: Genres;

    // Default value is 'Original Mix'.
    mixVersion: string;

    // Describes a songwriter by name and type (enumerated).
    songwriters: Songwriter[];

    title: string;

    // List remixers one per node and NOT as a node containing a comma separated
    // list of multiple remixers.
    remixers: (keyof typeof Artists)[];

    // Please fill in any copyright information that this track has, up to 255
    // characters in length.
    copyright?: string;

    // ISO 3166-1 Country Codes. See iso.org for details. Countries that are
    // listed are those in which the material will be available for sale. The
    // (non-standard) 'WW' value indicates the material is available for
    // worldwide distribution. The following deprecated codes remain for
    // compatibility and will be translated as follows: ZR ... CD (Congo,
    // Democratic Republic of the) UK ... GB (Great Britain) CS ... RS (Serbia)
    // and ME (Montenegro).
    countries?: Country[];

    // Tracks can be Exclusive on Beatport for one of the following periods:
    // 0, 2, 4 or 8 week or 'lifetime'. Tracks which are Non-Exclusive should be
    // set to the period of '0' (default).

    // '0' = Non-Exclusive (default)
    // '2' = 2 Weeks Exclusive
    // '4' = 4 Weeks Exclusive
    // '8' = 8 Weeks Exclusive
    // 'lifetime' = Lifetime Exclusive

    // If the label is on the Exclusive deal, then the exclusive period agreed
    // to in the exclusive agreement must be selected. This period can be
    // upgraded to a longer duration, if desired.

    // Exclusive content must be receieved by Beatport at least seven (7)
    // business days prior to the scheduled release date.
    exclusivePeriod?: ExclusivePeriod;

    // The originalReleaseDate field is in the format YYYY-MM-DD.
    // originalReleaseDate should be a future date ONLY if the material has
    // never been released on any other medium (Vinyl, CD, Digital, etc) in
    // the past. If the material has been available at any other time on any
    // other medium, you must use the date at which it originally became
    // available for purchase.
    originalReleaseDate?: string;

    // A publisher is an entity that oversees the royalty collection of a
    // composition for songwriters and composers. When a production has
    // generated income through various mediums of exploitation (digital
    // download, performance, etc.) it is the publishers responsibility to
    // obtain and distribute the payments associated with the composition to
    // the respective artist. However, In most countries the PRO/songwriter
    // agreement supersedes the label-publisher-songwriter relationship.
    // Therefore, when a song generates income by performance or mechanical
    // royalty; The PRO is the first organization to collect for a songwriter
    // (e.g., EMI Music Publishing).
    publisher?: string;
}

interface Songwriter {
    name: Artists;
    type: SongwriterType;
}

type SongwriterType = "author" | "composer" | "arranger" | "lyricist";

type AlbumAction = "insert" | "update" | "delete";

type SalesType = "release" | "album" | "mix";

type ExclusivePeriod = 0 | 2 | 4 | 8 | "lifetime";

export type {
    ReleaseModule,
    Release,
    SalesType
};