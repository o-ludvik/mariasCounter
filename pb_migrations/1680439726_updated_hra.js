migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // remove
  collection.schema.removeField("zgrwxrr7")

  // remove
  collection.schema.removeField("mkksugf7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9yirrjgr",
    "name": "typHry",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "db7yegdh",
    "name": "trumfy",
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
  const collection = dao.findCollectionByNameOrId("isc1fv4bk9phekw")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("9yirrjgr")

  // remove
  collection.schema.removeField("db7yegdh")

  return dao.saveCollection(collection)
})
