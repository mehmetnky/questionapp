var express = require('express'),
app = express(),
port = process.env.PORT || 3002,

mongoose = require('mongoose'),
Task = require('./api/models/questionModel'), //created model loading here
MongoClient = require('mongodb');
bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

mongoose.Promise = global.Promise;
const connection = mongoose.createConnection('mongodb+srv://root:root@questionapp-sxggp.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true });
mongoose.connect('mongodb+srv://root:root@questionapp-sxggp.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true }); 

const uri = "mongodb+srv://root:root@questionapp-sxggp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req,res) =>{
  res.send("Hello worldssss!");
});


var qRoutes = require('./api/routes/questionRoutes'); //importing route
//var uRoutes = require('./api/routes/userRoutes'); //importing route
qRoutes(app); //register the route
//uRoutes(app);
app.use(session({
    secret: 'authApp',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: connection
    })
  }));



app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Authentication Learning | User Login RESTful API server started on: ' + port);