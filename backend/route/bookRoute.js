const express = require('express');
const { Book } = require('../models/bookModel');

const router = express.Router()

router.post('/book',async(req,res)=>{
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.send({message: 'Send all required fields'}).status(500)
        }
        const newBook = {
            title : req.body.title,
            author : req.body.author,
            publishYear : req.body.publishYear
        };

        const book = await Book.create(newBook);
        res.send(book).status(201);

    }catch(error){
        console.log(error.message);
        res.send({message:error.message}).status(500)
    }
})

router.get('/book',async(req,res)=>{
    try{
        const book = await Book.find({})
        res.json({count:book.length, data: book}).status(200)
    }catch(error){
        console.log(error.message);
        res.send({message:error.message}).status(500)
    }
})

router.get('/book/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id)
        res.json(book).status(200)
    }catch(error){
        console.log(error.message);
        res.send({message:error.message}).status(500)
    }
})

router.put('/book/:id',async(req,res)=>{
    try {
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            res.send({"message":"Need all required field"}).status(500)
        }
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body)
        if(!book){
            res.send({"message":"There is no book"}).status(400)
        }
        res.send({"message":"Book update successfully"}).status(200)
    } catch (error) {
        console.log(error.message);
        res.send({message:error.message}).status(500)
    }
})

router.delete('/book/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            res.json({message:'book not found'}).status(404)
        }
        res.send({message:'Book delete success'}).status(200)
        
    } catch (error) {
        console.log(error.message);
        res.send({message:error.message}).status(500)
    }
})

module.exports = {
    router
}
