migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("an2z3bhz5a0td87")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("an2z3bhz5a0td87")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
