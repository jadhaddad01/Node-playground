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
    salePrice: undefined,
    rating: 4.2
}

// const productLabel = product.label
// const stock = product.stock
// const rating = 5 // default if no rating in product object

// const { label: productLabel, stock, rating = 5 } = product
// console.log(productLabel, stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => { // destructure in param
    console.log(type, label, stock);
}

transaction('order', product)