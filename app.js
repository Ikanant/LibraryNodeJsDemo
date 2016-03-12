var express = require('express');
var app = express();

var nav = require('./src/tools/navigationBar');
var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.get('/', function(req, res){
    res.render('index', {title: 'EJS Title', nav: [{Link:'Books', Text:'Books'}, {Link: 'Authors', Text: 'Authors'}]});
});

app.listen(port, function(err){
   console.log('Running server on port: ' + port);
});