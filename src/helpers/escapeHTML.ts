export function escapeHTML(str: string): string {
    return str
        .replace(/&/g, "&amp;");
}