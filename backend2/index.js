//Requires
var express = require('express');
var mysql = require('mysql');
var cors = require('cors');
var path = require('path');

//Variables
var app = express();
var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'pidb'
});

//Configuration and packages
app.use(cors());
app.use(express.urlencoded())

//Connection to database
connection.connect(function(error){
  if(!!error){
    console.log('Error: '+error.message);
  }
  else{
    console.log('Connected');
  }
});


app.get('/paises', function(req, res){ //localhost:3000/paises
  //about mysql

  connection.query("select * from paises", function(error, rows, fields){
    if(!!error){
      console.log('Error: '+error.message);
    }else{
      console.log('correct');
      console.log(rows);

      console.log('no of records is '+rows.length);

      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(rows));
    }
  });
});

app.post('/paises', function(req, res){
  console.log(req);
  var country = req.body.country;

  connection.query("INSERT INTO paises(id, NomPais) VALUES (null, '" + country + "')", function (error, result) {
    if(!!error){
      console.log('Error: ' + error.message);
    }else{
      console.log(country + " inserted correctly.");

    }
    res.redirect('/');
    res.end();
  })
});


app.use('/', express.static(path.join(__dirname, 'public/pages')))

app.use(express.static('public'))

app.listen(1337);
