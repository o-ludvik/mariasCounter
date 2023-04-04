migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dzfxle1j",
    "name": "hraci",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq")

  // remove
  collection.schema.removeField("dzfxle1j")

  return dao.saveCollection(collection)
})
