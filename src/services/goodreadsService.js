var goodreadsService = function() {
    var getBookById = function(id, cb){
        cb(null, {description: "Our description"});
    }

    return {
        getBookById: getBookById
    };
}

module.exports = goodreadsService;

/*
Api Key

Here is your developer key for using the Goodreads API. This key must be appended to every request using the form variable 'key'. (If you're using our write API, you'll need your secret too.)

key: aq3aEG4icm6ohboijQvGjQ
secret: JG6QD8oi9TeSazJPfVHupJ15ZO91J7dQJtac3R3XU
*/
