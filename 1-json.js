const fs = require('fs')

// const book = {
//     title: 'Title',
//     author: 'Author'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataJSON = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataJSON)

data.name = "Karim"
data.age = 30

const data1JSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', data1JSON)