/**
 * Beatport accepts the following list of genres and sub-genres:
 * https://beatportops.zendesk.com/hc/en-us/articles/223805367-Beatport-Genres-and-Sub-genres
 * Anyway, the list below matches the entries in assets/schema_genres.xml.
 */

enum Genres {
    AfroHouse = "Afro House",
    Breaks = "Breaks",
    ChillOut = "Chill Out",
    DeepHouse = "Deep House",
    DJTools = "DJ Tools",
    ElectroHouse = "Electro House",
    Electronica = "Electronica",
    House = "House",
    HouseDisco = "House | Disco",
    HouseGarage = "House | Garage",
    HouseTribal = "House | Tribal",
    HouseVocal = "House | Vocal",
    IndieDanceNuDisco = "Indie Dance / Nu Disco",
    Minimal = "Minimal",
    ProgressiveHouse = "Progressive House",
    TechHouse = "Tech House",
    Techno = "Techno",
    Trance = "Trance"
}

export {
    Genres
};