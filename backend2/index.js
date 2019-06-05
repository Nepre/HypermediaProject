var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'pidb'
});

connection.connect(function(error){
  if(!!error){
    console.log('Error: '+error.message);
  }
  else{
    console.log('Connected');
  }
});

  app.get('/paises', function(req, res){
  //about mysql

  connection.query("select * from paises", function(error, rows, fields){
    if(!!error){
      console.log('Error: '+error.message);
    }else{
      console.log('correct');
      console.log(rows);

      console.log('no of records is '+rows.length);

      //We have to allow control access for browsers
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);

      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(rows));
    }
  });
});

app.listen(1337);
