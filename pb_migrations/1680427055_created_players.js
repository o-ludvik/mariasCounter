migrate((db) => {
  const collection = new Collection({
    "id": "9f136s6bfuv2dsk",
    "created": "2023-04-02 09:17:35.238Z",
    "updated": "2023-04-02 09:17:35.238Z",
    "name": "players",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gar6xlkc",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lng1sztj",
        "name": "totalGamesPlayed",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "mo9cgyzq",
        "name": "finalMoney",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9f136s6bfuv2dsk");

  return dao.deleteCollection(collection);
})
