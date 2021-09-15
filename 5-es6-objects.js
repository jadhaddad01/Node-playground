// Object property shorthand

const name = 'Ahmed'
const userAge = 34

const user = {
    name, // name: name.
    age: userAge,
    location: 'Amsterdam'
}

console.log(user);

// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

const { label, stock } = product
console.log(label, stock);