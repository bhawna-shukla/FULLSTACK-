const {Schema , model} = require('../connection')
const ProductSchema = new Schema({
    name : String,
    email : String,
    password : String,
    
});
module.exports = model('product', ProductSchema )
