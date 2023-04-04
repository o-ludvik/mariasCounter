migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r5kiqviacbwi1gu")

  // remove
  collection.schema.removeField("zt3kazzv")

  // remove
  collection.schema.removeField("teubciiv")

  // remove
  collection.schema.removeField("m4akkuil")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7khwjzxx",
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
    "id": "vwvengtm",
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
    "id": "wwwfuzjr",
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
  const collection = dao.findCollectionByNameOrId("r5kiqviacbwi1gu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zt3kazzv",
    "name": "povinnost",
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
    "id": "teubciiv",
    "name": "micha",
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
    "id": "m4akkuil",
    "name": "kope",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("7khwjzxx")

  // remove
  collection.schema.removeField("vwvengtm")

  // remove
  collection.schema.removeField("wwwfuzjr")

  return dao.saveCollection(collection)
})
