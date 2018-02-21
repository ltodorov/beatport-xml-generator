import { Track } from "../track";

export class Release {
  // A unique number of the release
  id: number;

  // The OriginalReleaseDate field is in the format YYYY-MM-DD.
  // OriginalReleaseDate should be a future date ONLY if the material has never
  // been released on any other medium (Vinyl, CD, Digital, etc) in the past.
  // If the material has been available at any other time on any other medium,
  // you must use the date at which it originally became available for purchase.
  originalReleaseDate: string;

  // Universal Product Code / European Article Number
  UPC_EAN: number;

  // A title of the release
  title: string;

  // The following formats are accepted: wav and aif. The filename extension
  // must be .wav, .aif or .aiff. Quality must be 44.1KHz, 16-bit
  tracks: Track[];

  constructor(props: Release) {
    this.id = props.id;
    this.originalReleaseDate = props.originalReleaseDate;
    this.UPC_EAN = props.UPC_EAN;
    this.title = props.title;
    this.tracks = props.tracks;
  }
}