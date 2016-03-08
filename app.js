var express = require('express');

var app = express();
app.use(express.static('public'));
app.use(express.static('src/views'));
var port = 5000;

app.get('/', function(req, res){
    res.send('public/index.html');
});

app.listen(port, function(err){
   console.log('Running server on port: ' + port);
});