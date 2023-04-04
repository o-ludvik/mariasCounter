migrate((db) => {
  const collection = new Collection({
    "id": "q2mttcbpmou74nd",
    "created": "2023-04-02 12:08:56.018Z",
    "updated": "2023-04-02 12:08:56.018Z",
    "name": "dssdsdsd",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "i8fsq1c1",
        "name": "dsdd",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "or85cbnk",
        "name": "aaa",
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
  const collection = dao.findCollectionByNameOrId("q2mttcbpmou74nd");

  return dao.deleteCollection(collection);
})
