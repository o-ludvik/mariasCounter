migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // remove
  collection.schema.removeField("5b4qjpkt")

  return dao.saveCollection(collection)
})
