const mongoose = require('mongoose');
const url=('mongodb+srv://BHAWNA150902:15090205@cluster0.vwjaq8g.mongodb.net/Mern8?retryWrites=true&w=majority&appName=Cluster0')
mongoose.connect(url)

.then((result) => {
    console.log('connected to the database');
}).catch((err) => {
    console.log(err)
});
module.exports =mongoose;
