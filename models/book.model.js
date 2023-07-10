

const mongoose = require("mongoose");

const BooksSchema = mongoose.Schema({

    title: { type: String, required: true },
    genre: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String},
    price: { type: Number, required: true },
});

const BooksModel = mongoose.model("book",BooksSchema);

module.exports={ BooksModel}