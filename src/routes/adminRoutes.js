var express = require('express');
var adminRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        bookId: 656,
        read: false
    },
    {
        title: 'Les Miserables',
        genre: 'Historical Fiction',
        author: 'Victor Hugo',
        bookId: 24280,
        read: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        author: 'Jules Verne',
        bookId: 32829,
        read: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        author: 'Henry Kuttner',
        bookId: 18513759,
        read: false
    },
];

var router = function(){
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db){
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results){
                    res.send(results);
                    db.close();
                });
            });
        });

    return adminRouter;
};

module.exports = router;
