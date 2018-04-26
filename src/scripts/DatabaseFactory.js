// Creating a Factory function to add contact aspects

const addContact = (name, phoneNumber, address) => Object.create(null, {
    name: {
        value: name,
        enumerable: true
    },
    phoneNumber: {
        value: phoneNumber,
        enumerable: true,
        writable: true,
    },
    address: {
        value: address,
        enumerable: true,
        writable: true
    }
})

module.exports = addContact