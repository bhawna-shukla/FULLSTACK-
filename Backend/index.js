const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
 
const userRouter =require('./Routers/Users');
const productRouter = require('./Routers/Product');
app.use(cors({
    origin : ['http://localhost:5173']
}))

// middleware
app.use(express.json());
app.use('/user', userRouter);
app.use('/product', productRouter);


app.listen(port,()=> {
    console.log('server is running on port ${port}' );
});
