migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r5kiqviacbwi1gu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrjduvxr",
    "name": "sezeni",
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
  const collection = dao.findCollectionByNameOrId("r5kiqviacbwi1gu")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qrjduvxr",
    "name": "field",
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
