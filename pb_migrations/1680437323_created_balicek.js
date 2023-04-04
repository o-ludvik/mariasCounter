migrate((db) => {
  const collection = new Collection({
    "id": "jd25wozfq5k52n8",
    "created": "2023-04-02 12:08:43.031Z",
    "updated": "2023-04-02 12:08:43.031Z",
    "name": "balicek",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wbraagg6",
        "name": "as",
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
        "id": "qgn1ktj4",
        "name": "ddd",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jd25wozfq5k52n8");

  return dao.deleteCollection(collection);
})
