 
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/movies')
.then(() => {
    console.log("Connection Open!!!")
})
.catch(err =>{ 
    console.log('oh no errr')
    console.log(err)
})


const movieSchema = new mongoose.Schema({
    title:String,
    year: Number,
    score:Number,
    Rating : String
})

const Movie = mongoose.model('Movie',movieSchema);

// const Amadeas = new Movie({
//     title: 'Amadeas',
//     year: 1992,
//     score: 9.2,
//     Rating: "R"
// })

Movie.insertMany([
    {
        title:"Amelie",
        year: 2001,
        score:8.3,
        Rating : 'R'
    },
    {
        title:'Alien',
        year: 3929,
        score:4,
        Rating : 'PG'
    },
    {
        title:"The Iron Giant",
        year: 1999,
        score: 7.4,
        Rating : 'R'
    },
    {
        title:"Stand By Me",
        year: 1984,
        score: 8.3,
        Rating : "R"
    }
    ,{
        title:"Moonrise Kingdom",
        year: 2014,
        score: 9.3,
        Rating : "PG-13"
    }
])
.then(data => {
    console.log('it worked')
    console.log(data)
})