import { templateTrack } from "./track";
import { release } from "../../mocks";
import { templateArtist } from "../artist";
import { templateRemixers } from "../remixers";
import { templateSongwriter } from "../songwriter";

describe("Templates: track", () => {
  it("Should return the first track", () => {
    const index = 0;
    const track = release.tracks[index];
    const number = index + 1;
    const title = track.title;
    const mixVersion = track.mixVersion;
    const songwriters = track.songwriters;

    expect(templateTrack("", release, track, index).trim()).toBe(`<track>
      <albumOnly>0</albumOnly>
      <trackNumber>${number}</trackNumber>
      <ISRC>${track.ISRC}</ISRC>
      <trackPublisher>No Smoking Recordings</trackPublisher>
      <trackTitle>${title}</trackTitle>
      <trackMixVersion>${mixVersion}</trackMixVersion>
      <originalReleaseDate>${release.originalReleaseDate}</originalReleaseDate>
      <beatportExclusive>
        <exclusivePeriod>0</exclusivePeriod>
      </beatportExclusive>
      <trackArtists>${track.artists.reduce(templateArtist, "")}
      </trackArtists>${templateRemixers(track.remixers)}
      <trackAudioFile>
        <audioFilename>NSR${release.id}_${number}.wav</audioFilename>
      </trackAudioFile>
      <countriesAvailable>
        <country>WW</country>
      </countriesAvailable>
      <trackGenre>${track.genre}</trackGenre>
      <trackCopyright>No Smoking Recordings</trackCopyright>
      <songwriters>${songwriters.reduce(templateSongwriter, "")}
      </songwriters>
    </track>`);
  });

  it("Should return the second track", () => {
    const index = 1;
    const track = release.tracks[index];
    const number = index + 1;
    const title = release.title;
    const mixVersion = "Original Mix";
    const songwriters = track.artists;

    expect(templateTrack("", release, track, index).trim()).toBe(`<track>
      <albumOnly>0</albumOnly>
      <trackNumber>${number}</trackNumber>
      <ISRC>${track.ISRC}</ISRC>
      <trackPublisher>No Smoking Recordings</trackPublisher>
      <trackTitle>${title}</trackTitle>
      <trackMixVersion>${mixVersion}</trackMixVersion>
      <originalReleaseDate>${release.originalReleaseDate}</originalReleaseDate>
      <beatportExclusive>
        <exclusivePeriod>0</exclusivePeriod>
      </beatportExclusive>
      <trackArtists>${track.artists.reduce(templateArtist, "")}
      </trackArtists>
      <trackAudioFile>
        <audioFilename>NSR${release.id}_${number}.wav</audioFilename>
      </trackAudioFile>
      <countriesAvailable>
        <country>WW</country>
      </countriesAvailable>
      <trackGenre>${track.genre}</trackGenre>
      <trackCopyright>No Smoking Recordings</trackCopyright>
      <songwriters>${songwriters.reduce(templateSongwriter, "")}
      </songwriters>
    </track>`);
  });
});