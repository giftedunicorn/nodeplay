const RandomWords = require('random-words')
const Lsh = require('lsh')

const config = {
  storage: 'memory',
  shingleSize: 5,
  numberOfHashFunctions: 120
}
const lsh = Lsh.getInstance(config)

const numberOfDocuments = 100
const documents = []

// generate random documents containing 100 words each
for (let i = 0; i < numberOfDocuments; i += 1) {
  documents.push(RandomWords({ min: 100, max: 100 }).join(' '))
}

// add documents just created to LSH with their id
for (let i = 0; i < numberOfDocuments; i += 1) {
  lsh.addDocument(i, documents[i])
}

// search for a specific document with its id and custom bicketSize
// you can also perform a query using a string by passing text instead of id
// bucket size are dynamic. feel free to change it to find proper one
const q = {
  id: 1,
  // text: 'this is a sample text to search for',
  bucketSize: 6
}
const result = lsh.query(q)

// this will print out documents which are candidates to be similar to the one we are looking for
console.log(result)