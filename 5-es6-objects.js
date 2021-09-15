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

// const productLabel = product.label
// const stock = product.stock
// const rating = undefined

const { label: productLabel, stock, rating } = product
console.log(productLabel, stock);
console.log(rating);