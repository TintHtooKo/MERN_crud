const express = require('express');
const { PORT, mongoDBURL } = require('./config');
const { default: mongoose } = require('mongoose');
const { Book } = require('./models/bookModel');
const { router } = require('./route/bookRoute');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors())

// app.use(cors({
//     origin:'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }));

app.use('/',router)

mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('connect db success');
    app.listen(PORT, () => {
        console.log(`Running in Port: ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
})

