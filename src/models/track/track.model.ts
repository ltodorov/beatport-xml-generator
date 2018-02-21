import { GENRES } from "../genres";

export class Track {
  // ISO-3901 - International Standard Recording Code ISRC.
  // http://www.ifpi.org is the the ISRC registration authority.
  ISRC: string;
  title: string;
  mixVersion: string;
  artists: string[];
  remixers: string[];
  songwriters: string[];

  // Recommend a genre or genre/subgenre for this particular track. This is
  // only a recommendation. Beatport reserves the right to determine the final
  // published genre and/or subgenre.
  genre: GENRES;

  constructor(props: Track) {
    this.ISRC = props.ISRC;
    this.title = props.title;
    this.mixVersion = props.mixVersion;
    this.artists = props.artists;
    this.remixers = props.remixers;
    this.songwriters = props.songwriters;
    this.genre = props.genre;
  }
}