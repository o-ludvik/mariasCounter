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
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5b4qjpkt",
    "name": "sezenifor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3be8ipu802ounuq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
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
    "name": "field",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5b4qjpkt",
    "name": "field1",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "3be8ipu802ounuq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
