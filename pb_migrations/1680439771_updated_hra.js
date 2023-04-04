migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rpx3txw1",
    "name": "hracfor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "4c15n0bwadwk9rv",
      "cascadeDelete": false,
      "minSelect": 3,
      "maxSelect": 3,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rpx3txw1",
    "name": "hracfor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "4c15n0bwadwk9rv",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
