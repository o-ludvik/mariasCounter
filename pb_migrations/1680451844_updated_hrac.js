migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4c15n0bwadwk9rv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qcyorpdq",
    "name": "prijmeni",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4c15n0bwadwk9rv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qcyorpdq",
    "name": "prijemni",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
