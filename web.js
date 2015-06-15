var express = require('express');
var app = express();
var path = require('path');
var ejs = require('ejs');
var expressLayouts = require('express-ejs-layouts');


app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('views', path.join(__dirname, 'app/views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.set('layout', false);


app.get('/', (req, res, next)=> {
    res.render('products/list', {
      layout: 'layout.html'
    });
});


var port = process.env.PORT || 3000
app.listen(port);
module.exports = app;