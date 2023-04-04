migrate((db) => {
  const collection = new Collection({
    "id": "kfp79s6ib483nru",
    "created": "2023-04-02 12:09:38.310Z",
    "updated": "2023-04-02 12:09:38.310Z",
    "name": "aaasd",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ypav9wcs",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "jd25wozfq5k52n8",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "2hmplqjv",
        "name": "f",
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
  const collection = dao.findCollectionByNameOrId("kfp79s6ib483nru");

  return dao.deleteCollection(collection);
})
