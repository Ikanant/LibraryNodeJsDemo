var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});

var goodreadsService = function() {
    var getBookById = function(id, cb){

        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/' + id + '?format=xml&key=aq3aEG4icm6ohboijQvGjQ',
        }

        var callback = function(response){
            var str = '';
            response.on('data', function(chunk){
                str += chunk;
            });

            response.on('end', function(){
                console.log(str);
                parser.parseString(str, function(err, result){
                    cb(null, result.GoodreadsResponse.book);
                });
            });
        }



        http.request(options, callback).end();
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
