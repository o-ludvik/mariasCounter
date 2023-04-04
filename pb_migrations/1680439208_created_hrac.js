migrate((db) => {
  const collection = new Collection({
    "id": "4c15n0bwadwk9rv",
    "created": "2023-04-02 12:40:08.159Z",
    "updated": "2023-04-02 12:40:08.159Z",
    "name": "hrac",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bwlbcgrv",
        "name": "jmeno",
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
        "id": "qcyorpdq",
        "name": "prijemni",
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
        "id": "kpbz9meu",
        "name": "penize",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("4c15n0bwadwk9rv");

  return dao.deleteCollection(collection);
})
