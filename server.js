var express = require('express'),
    app = express(),
    port = 4444,
    mongoose = require('mongoose'),
    Task = require('./api/models/todolistModel'),
    cors = require('cors'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'5mb'}));  
app.use(bodyParser.json());
app.use(cors());
app.use(function (req, res, next) {        
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true);       
    next();  
});  
app.get('/random', (req, res) => res.send('Hello World with Express'));

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('api is running');