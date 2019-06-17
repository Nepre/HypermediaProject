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


// GET Events

app.get('/events', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select * from events", function(error, rows, fields){
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

app.get('/events/january', function(req, res){
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 1", function(error, rows, fields){
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

app.get('/events/february', function(req, res){
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 2 ", function(error, rows, fields){
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

app.get('/events/march', function(req, res){
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 3 ", function(error, rows, fields){
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

app.get('/events/april', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 4 ", function(error, rows, fields){
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

app.get('/events/may', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 5 ", function(error, rows, fields){
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

app.get('/events/june', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 6 ", function(error, rows, fields){
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

app.get('/events/july', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 7 ", function(error, rows, fields){
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

app.get('/events/august', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 8 ", function(error, rows, fields){
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

app.get('/events/september', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 9 ", function(error, rows, fields){
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

app.get('/events/october', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Name, Id, Place, Date, Price, Picture  from events where month(date) = 10 ", function(error, rows, fields){
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

app.get('/events/november', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 11 ", function(error, rows, fields){
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

app.get('/events/december', function(req, res){ //localhost:3000/books
  //about mysql

  connection.query("select month(date), Name, Id, Place, Date, Price, Picture  from events where month(date) = 12 ", function(error, rows, fields){
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

app.get('/authors/Birthday', function(req, res){ //localhost:1337/books/theme
//about mysql

  connection.query("select * from `authors` order by Birthday", function(error, rows, fields){
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

//LOGIN

app.post('/login', function(req, res){
  var usu = req.body.usu;
  var pwd = req.body.pwd;

  connection.query("select count(id) as cn from users where Email ='" + usu + "' and Password = '" + pwd + "'", function (error, rows, result) {
    if(!!error){
      console.log('Error: ' + error.message);
    }else{
      if(rows[0].cn == 0){
        res.redirect('login.html?WP')
      }
      else{ //We would create a token but as it is now we will mantain it with a simple cookie with the username. This would indeed be easily hackable.
        res.redirect('login.html?SC=' + usu);
      }

    }
    res.end();
  })
});

app.post('/register', async function(req, res) { //We need to put a query within the query
  var name = req.body.name;
  var surname = req.body.surname;
  var email = req.body.email;
  var pwd = req.body.pwd;
  var pwd2 = req.body.pwd2;

  if(pwd != pwd2){
    res.redirect('register.html?WP');
  }

  connection.query("select count(id) as cn from users where Email ='" + email + "'", function (error, rows, result) {
    if(!!error){
      console.log('Error: ' + error.message);
    }else{
      if(rows[0].cn == 0){
        let queryIns = "INSERT INTO users(id, Name, Surname, Email, Password) VALUES (null, '" + name + "','" + surname + "','" + email + "','" + pwd + "')";
        connection.query(queryIns, function (error, result) {
          if(!!error){
            console.log('Error: ' + error.message);
            res.redirect('/');
          }else{
            console.log(email  + " inserted correctly.");
            res.redirect('login.html?SC=' + email);

          }

        });
      }
      else{ //We would create a token but as it is now we will mantain it with a simple cookie with the username. This would indeed be easily hackable.
        res.redirect('register.html?UT');
      }

    }
    res.end();
  })
});



app.use('/', express.static(path.join(__dirname, 'public/pages')))

app.use(express.static('public'))

app.listen(1337);
