migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // remove
  collection.schema.removeField("rpx3txw1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "coz23ysl",
    "name": "povinnost",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "umlrkcrb",
    "name": "kope",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jmxieinx",
    "name": "micha",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rpx3txw1",
    "name": "hraci",
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

  // remove
  collection.schema.removeField("coz23ysl")

  // remove
  collection.schema.removeField("umlrkcrb")

  // remove
  collection.schema.removeField("jmxieinx")

  return dao.saveCollection(collection)
})
