
//  ! We create function to control like getone book
const express = require('express');
const router = express.Router();
const Product = require("../model/Book")
const booksController = require("../controllers/book-controller")


router.get("/",booksController.getAllBooks );
router.post("/",booksController.addBook);

router.get("/:id",booksController.getbookbyId);

router.put("/:id",booksController.updateBook);

router.delete("/:id",booksController.deleteBook);
module.exports = router;