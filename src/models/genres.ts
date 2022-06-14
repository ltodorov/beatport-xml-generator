/**
 * Beatport accepts the following list of genres and sub-genres:
 * https://beatportops.zendesk.com/hc/en-us/articles/223805367-Beatport-Genres-and-Sub-genres
 * Anyway, the list below matches the entries in assets/schema_genres.xml.
 */

enum Genres {
    AfroHouse = "Afro House",
    BassHouse = "Bass House",
    Breaks = "Breaks / Breakbeat / UK Bass",
    Dance = "Dance / Electro Pop",
    DeepHouse = "Deep House",
    DJTools = "DJ Tools",
    Electro = "Electro (Classic / Detroit / Modern)",
    Electronica = "Electronica",
    ElectronicaAmbient = "Electronica | Ambient",
    FunkyHouse = "Funky House",
    HardDance = "Hard Dance / Hardcore",
    House = "House",
    HouseAcid = "House | Acid",
    HouseSoulful = "House | Soulful",
    IndieDance = "Indie Dance",
    JackinHouse = "Jackin House",
    MelodicHouse = "Melodic House &amp; Techno",
    Minimal = "Minimal / Deep Tech",
    NuDisco = "Nu Disco / Disco",
    OrganicHouse = "Organic House / Downtempo",
    ProgressiveHouse = "Progressive House",
    TechHouse = "Tech House",
    Techno = "Techno (Raw / Deep / Hypnotic)",
    Trance = "Trance"
}

export {
    Genres
};