export function templateSongwriter(acc: string, songwriter: string) {
  return `${acc}
        <songwriter>
          <name>${songwriter}</name>
          <type>author</type>
        </songwriter>`;
}