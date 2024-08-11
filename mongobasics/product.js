 
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then(() => {
    console.log("Connection Open!!!")
})
.catch(err =>{ 
    console.log('oh no errr')
    console.log(err)
})

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:20
        
    },
    price:{
        type:Number,
        required:true,
        min: [0,'price must be positive yo dodo']
        
    },
    onSale :{
        type : Boolean,
        default: false
    
    },
    categories:[String],
    qty:{
        online:{
            type:Number,
            default: 0
        },
        inStock:{
            type:Number,
            default:0
        },
        size:{
            type:String,
            enum:['S' , 'M' , 'L']
        }
    }
});

productSchema.methods.toogleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

const Product = mongoose.model('Product' , productSchema);


const findProduct = async() => {
    const foundProduct = await Product.findOne({name:'Bike Helmet'});
    console.log(foundProduct);
    await foundProduct.toogleOnSale();
    console.log(foundProduct)
}

findProduct();
const bike = new Product({name:'Cycling jersy ' , price: 29, categories:['Cycling'], size:'jfdsl'})



bike.save()
    .then(data => {
        console.log('It worked')
        console.log(data)
    })
    .catch(err => {
        console.log('Not working eroro');
        console.log(err)
    })
