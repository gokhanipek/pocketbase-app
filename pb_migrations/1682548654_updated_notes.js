migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("an2z3bhz5a0td87")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("an2z3bhz5a0td87")

  collection.listRule = null

  return dao.saveCollection(collection)
})
