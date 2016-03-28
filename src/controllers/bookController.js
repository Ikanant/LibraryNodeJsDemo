var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;


var bookController = function(bookService, nav){
    var url = 'mongodb://localhost:27017/libraryApp';

    var middleware = function(req, res, next){
        if(!req.user) {
            res.redirect('/');
        }
        next();
    }

    var getIndex = function (req, res) {
        mongodb.connect(url, function(err, db){
            var collection = db.collection('books');
            collection.find({}).toArray(
                function (err, results) {
                    res.render('bookListView', {
                        title: 'Book List',
                        nav: nav,
                        books: results
                    });
                }
            ); //We would put query inside {}
        });
    }

    var getById = function (req, res) {
        var id = new objectId(req.params.id);

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            collection.findOne({_id: id},
                function (err, result) {
                    res.render('bookView', {
                        title: 'Book',
                        nav: nav,
                        book: result
                    });
                });
        });
    }

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    }
}

module.exports = bookController;
