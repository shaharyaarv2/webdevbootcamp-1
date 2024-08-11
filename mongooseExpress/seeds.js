const mongoose = require('mongoose')

const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => {
    console.log("MONGO Connection Open!!!")
})
.catch(err =>{ 
    console.log('oh no mongo connections errr')
    console.log(err)
})


// const p = new Product({
//     name: "Ruby GrapeFruit",
//     price : 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     }).catch(e => {
//         console.log(e)
//     })


const seedProducts = [
    {
        name : 'Fairy Eggplant',
        price : 2,
        category : 'vegetable'
    },
    {
        name : 'Organinc celery',
        price : 1.3,
        category : 'vegetable'
    },
    {
        name : 'Chocolate Whole Milk',
        price : 2.3,
        category : 'dairy'
    },
    {
        name : 'Organinc mini seedless watermelon',
        price : 2.33,
        category : 'fruit'
    }
]

Product.insertMany(seedProducts)
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})