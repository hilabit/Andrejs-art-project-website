const bodyParser= require('body-parser');
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

const portNumber = 2777;

app.use(bodyParser.urlencoded({extended: false}));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + `/public`));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('home', {
        layout: 'layout',
    });
});

app.listen(portNumber, ()=> console.log(`listening on ${portNumber}`));
