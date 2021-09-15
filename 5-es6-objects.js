// Object property shorthand

const name = 'Ahmed'
const userAge = 34

const user = {
    name, // name: name.
    age: userAge,
    location: 'Amsterdam'
}

console.log(user);