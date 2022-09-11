# beatport-xml-generator
XML generator for content submissions to Beatport.com

[![Node.js CI](https://github.com/ltodorov/beatport-xml-generator/actions/workflows/node.js.yml/badge.svg)](https://github.com/ltodorov/beatport-xml-generator/actions/workflows/node.js.yml)

## Steps to generate new XML
1. Create a new release in `src/data/releases`.
2. Change the release import in `src/index.ts`.
3. Run `npm run build`.
4. Release will be generated in `catalogue` folder.

## Update or delete a release via XML delivery
Please update your current schema to include:

* Insert ```<album_action>insert</album_action>```

    Create a new product that does not exist on the Beatport store, or re-deliver a product with updated metadata and/or assets.

* Update ```<album_action>update</album_action>```

    Automatically update existing metadata, audio, or artwork on a release or track on Beatport. This action will not work to update removed/hidden content.

    **PLEASE NOTE**, this action will only work to update existing tracks on a release and cannot be used to ADD content/tracks to an existing release.

* Delete ```<album_action>delete</album_action>```

    Remove/take down a product. This action does not work on individual tracks, it will only work on a full release/album. Please contact contentsupport@beatport.com if you would like to take down individual tracks.

## Folder structure for all album actions when delivering content

```Label Name - CATALOG# - Release Date (YYYY-MM-DD)``` - Insert

```Label Name - CATALOG# - Release Date (YYYY-MM-DD) - REPLACEMENT or UPDATE``` - Update

```Label Name - CATALOG# - Release Date (YYYY-MM-DD) - TAKEDOWN or DELETE``` - Delete

