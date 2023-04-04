migrate((db) => {
  const collection = new Collection({
    "id": "isc1fv4bk9phekw",
    "created": "2023-04-02 12:41:52.478Z",
    "updated": "2023-04-02 12:41:52.478Z",
    "name": "hra",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rpx3txw1",
        "name": "field",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "4c15n0bwadwk9rv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "zgrwxrr7",
        "name": "typHry",
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
        "id": "mkksugf7",
        "name": "trumfy",
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
        "id": "4halqrlt",
        "name": "proplaceno",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ibaxdfcl",
        "name": "cenaHry",
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
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw");

  return dao.deleteCollection(collection);
})
