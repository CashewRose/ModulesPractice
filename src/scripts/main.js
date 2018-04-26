console.log("test")

const contactCollection = [];
const addContact = require("./DatabaseFactory");
const saveDatabase = require("./SaveDatabase");
const loadDatabase = require("./LoadData");

// Adding pops to the database
const pops = addContact("Pops", "8675-309", "214 Ben");
contactCollection.push(pops)
console.log(pops)

// Adding bob to the database
const bob = addContact("Bob", "123-4567", "311 3rd ave");
contactCollection.push(bob)
console.log(bob)

console.log(contactCollection)

// Save database after adding info
saveDatabase(contactCollection, "Contact Database")

// Load current database in
const momma = loadDatabase ("Contact Database");

console.log(momma)
