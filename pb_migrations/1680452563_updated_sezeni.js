migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7xrgj4po",
    "name": "proplaceno",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("3be8ipu802ounuq")

  // remove
  collection.schema.removeField("7xrgj4po")

  return dao.saveCollection(collection)
})
