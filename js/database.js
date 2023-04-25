const initializeDb = indexedDB.open('instagram', 1)

initializeDb.onupgradeneeded = () => {
  const database = initializeDb.result
  database.createObjectStore('posts', { keyPath: 'id', autoIncrement: true })
}

initializeDb.onerror = () => {
  alert('Error creating or accessing db')
}

const addEntryToDb = (storeName, entry) => {
  const database = initializeDb.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.add(entry)

  transaction.onerror = () => {
    console.log(`Error adding Entry to ${storeName}.`)
    console.log(transaction.error)
  }
}

const getEntryFromDb = (storeName, id) => {
  const data = new Promise((resolve, reject) => {
    const database = initializeDb.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const request = id ? store.get(id) : store.getAll()
    request.onerror = () => {
      reject(request.error)
      console.log('Error getting data from the store')
    }

    request.onsuccess = () => {
      resolve(request.result)
    }
  })

  return Promise.resolve(data)
}

const searchEntry = (storeName, query) => {
  return new Promise((resolve, reject) => {
    const database = initializeDb.result
    const transaction = database.transaction([storeName])
    const store = transaction.objectStore(storeName)
    const allDataRequest = store.getAll()

    allDataRequest.onerror = () => {
      reject(allDataRequest.error)
      console.log('Error searching entry')
    }

    allDataRequest.onsuccess = () => {
      const result = allDataRequest.result.filter(
        (entry) => entry.content.includes(query) || entry.author.includes(query)
      )
      resolve(result)
    }
  })
}

const clearAllEntries = (storeName) => {
  const database = initializeDb.result
  const transaction = database.transaction([storeName], 'readwrite')
  const store = transaction.objectStore(storeName)
  store.clear()
}

export { initializeDb, addEntryToDb, getEntryFromDb, searchEntry, clearAllEntries }
