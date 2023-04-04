migrate((db) => {
  const collection = new Collection({
    "id": "3be8ipu802ounuq",
    "created": "2023-04-02 12:43:13.465Z",
    "updated": "2023-04-02 12:43:13.465Z",
    "name": "sezeni",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "veqezvev",
        "name": "kde",
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
        "id": "b1td7tmo",
        "name": "datum",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq");

  return dao.deleteCollection(collection);
})
