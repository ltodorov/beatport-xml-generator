import { escapeHTML } from "../../helpers";
import { Track, Release } from "../../models";
import { templateArtist } from "../artist";
import { templateRemixers } from "../remixers";
import { templateSongwriter } from "../songwriter";

export function templateTrack(acc: string, data: Release, track: Track, index: number) {
  const number = index + 1;
  const title = track.title || data.title;
  const mixVersion = escapeHTML(track.mixVersion) || "Original Mix";
  const songwriters = track.songwriters.length > 0 ? track.songwriters : track.artists;

  return `${acc}
    <track>
      <albumOnly>0</albumOnly>
      <trackNumber>${number}</trackNumber>
      <ISRC>${track.ISRC}</ISRC>
      <trackPublisher>No Smoking Recordings</trackPublisher>
      <trackTitle>${title}</trackTitle>
      <trackMixVersion>${mixVersion}</trackMixVersion>
      <originalReleaseDate>${data.originalReleaseDate}</originalReleaseDate>
      <beatportExclusive>
        <exclusivePeriod>0</exclusivePeriod>
      </beatportExclusive>
      <trackArtists>${track.artists.reduce(templateArtist, "")}
      </trackArtists>${track.remixers.length ? templateRemixers(track.remixers) : ""}
      <trackAudioFile>
        <audioFilename>NSR${data.id}_${number}.wav</audioFilename>
      </trackAudioFile>
      <countriesAvailable>
        <country>WW</country>
      </countriesAvailable>
      <trackGenre>${track.genre}</trackGenre>
      <trackCopyright>No Smoking Recordings</trackCopyright>
      <songwriters>${songwriters.reduce(templateSongwriter, "")}
      </songwriters>
    </track>`;
}