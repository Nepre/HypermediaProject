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
  database: 'polibooks'
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

//GET BOOKS

app.get('/books', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select * from books", function(error, rows, fields){
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

app.get('/books', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select * from books", function(error, rows, fields){
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

app.get('/books/available', function(req, res){ //localhost:1337/books/available
//about mysql

  connection.query("select * from `books` order by available desc limit 9", function(error, rows, fields){
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

app.get('/books/author', function(req, res){ //localhost:1337/books/authors
//about mysql

  connection.query("select * from `books` order by author asc limit 9", function(error, rows, fields){
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

app.get('/books/genre', function(req, res){ //localhost:1337/books/genre
//about mysql

  connection.query("select * from `books` order by genre asc limit 9", function(error, rows, fields){
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

app.get('/books/theme', function(req, res){ //localhost:1337/books/theme
//about mysql

  connection.query("select * from `books` order by theme asc limit 9", function(error, rows, fields){
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

app.get('/single_book/:id', function(req, res){ //localhost:1337/books/id

  connection.query("select * from `books` where id =" + req.params.id, function(error, rows, fields){
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


// POST BOOKS

app.post('/books', function(req, res){ // TODO: Fix post books
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


// GET AUTHORS
app.get('/authors', function(req, res){ //localhost:1337/books/theme
//about mysql

  connection.query("select * from `authors`", function(error, rows, fields){
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

// GET AUTHORS BY NATIONALITY
app.get('/authors/nationality', function(req, res){ //localhost:1337/books/theme
//about mysql

  connection.query("select * from `authors` order by nationality", function(error, rows, fields){
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

//GET AUTHOR
app.get('/authors/:id', function(req, res){ //localhost:1337/books/theme
//about mysql

  connection.query("select * from `authors` where id=" + req.params.id, function(error, rows, fields){
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


//GET BOOKS FROM AUTHOR
app.get('/authors/books/:id', function(req, res){ //localhost:1337/books/theme
//about mysql

  connection.query("select * from `authors`, `books` where authors.id = books.authorID and authors.id =" + req.params.id, function(error, rows, fields){
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

app.use('/', express.static(path.join(__dirname, 'public/pages')))

app.use(express.static('public'))

app.listen(1337);
