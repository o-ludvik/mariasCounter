migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqrud9ta",
    "name": "hry",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "isc1fv4bk9phekw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq")

  // remove
  collection.schema.removeField("bqrud9ta")

  return dao.saveCollection(collection)
})
