

const express = require("express");

const ROUTER = express.Router();

const {BooksModel} = require("../models/book.model.js");



  
  ROUTER.get('/book/sort/:order', async (req, res) => {
    const order = req.params.order;
    let value= 0
  
    try {
        if(order == "ASC"){
            value = 1;
        }
        else if (order == "DESC"){
            value = -1;
        }
      const book = await BooksModel.find().sort({price: value});
      res.send(book);
    } catch (error) {
      res.send(error)
    }
  });
    
  ROUTER.get('/book/genres/:genre', async (req, res) => {
    const genre = req.params.genre;
  
    try {
      const book = await BooksModel.find({ genre });
      res.send(book);
    } catch (error) {
      res.send(error)
    }
  });
  
  ROUTER.post('/book', async (req, res) => {
    const { title, author, genre, description, price } = req.body;
  
    const newbooksobj = new BooksModel({
      title,
      author,
      genre,
      description,
      price,
    });
  
    try {
      await newbooksobj.save();
      res.send({ message: 'Book added successfully' });
    } catch (error) {
      res.send(error)
    }
  });
  
  ROUTER.get('/book', async (req, res) => {
    try {
      const book = await BooksModel.find();
      res.send(book);
    } catch (error) {
      res.send(error)
    }
  });


  ROUTER.delete('/book/:id', async (req, res) => {
    const book_id = req.params.id;
  
    try {
      await BooksModel.findByIdAndDelete(book_id);
      res.send({ message: 'Book deleted' });
    } catch (error) {
      res.send(error)
    }
  });

  module.exports = {
    ROUTER
  }