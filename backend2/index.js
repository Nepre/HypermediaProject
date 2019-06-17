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

app.get('/Bestsellers', function(req, res){
  connection.query("SELECT * FROM `books` where `best-seller` = 1 limit 3", function(error, rows, fields){
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
})

app.get('/NextEvents', function(req, res){
  connection.query("SELECT * FROM `events` order by Starting_Date limit 2", function(error, rows, fields){
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
})

app.get('/events', function(req, res){
  //about mysql

  connection.query("SELECT id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events`", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 1 or month(End_Date) = 1", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 2 or month(End_Date) = 2 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) =3  or month(End_Date) =3 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 4 or month(End_Date) = 4 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 5 or month(End_Date) = 5 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 6 or month(End_Date) = 6 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 7 or month(End_Date) = 7 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 8 or month(End_Date) =8 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 9 or month(End_Date) = 9 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 10 or month(End_Date) = 10 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 11 or month(End_Date) = 11 ", function(error, rows, fields){
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

  connection.query("SELECT  month(Starting_Date), month(End_Date) id, Name, Place, Starting_Date, End_Date, Price, Picture FROM `events` where month(Starting_Date) = 12 or month(End_Date) =12 ", function(error, rows, fields){
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

app.get('/single_book/:id', function(req, res){

  connection.query("SELECT b.title, b.genre, a.Name, b.date, b.description, a.Biography, b.price, b.image FROM `books` b join `authors` a where b.authorID = a.id and b.id = " + req.params.id, function(error, rows, fields){
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

app.get('/single_book/:id/related', function(req, res){

  var qr = "SELECT b.id id1, b.authorID ath1, b.genre gen1, b2.id id2, b2.image, b2.authorID auth2, b2.genre gen2 FROM `books` b join `books` b2 WHERE (b.authorID = b2.authorID or b.genre = b2.genre) and b.id = " + req.params.id + " and b.id != b2.id";

  connection.query(qr , function(error, rows, fields){
    //console.log(rows);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(rows));
  });

})

app.get('/single_book/:id/comments', function(req, res){

  var qr = "SELECT c.userID, u.id, c.bookID, u.Name, c.comment FROM `comments` c join `users` u WHERE c.userID = u.id and c.bookID = "+ req.params.id;

  connection.query(qr , function(error, rows, fields){
    //console.log(rows);
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(rows));
  });

})

app.post('/single_book/PostComent/:id', function(req, res){ // TODO: Fix post books
  //console.log(req);
  var userId = req.body.id;
  var bookId = req.params.id;
  var comment = req.body.comment;
  var query = "INSERT INTO comments(id, userID, bookID, comment) VALUES (null, '" + userId + "'," + bookId + ",'" + comment + "');"
  console.log(query);
  connection.query(query, function (error, result) {
    if(!!error){
      console.log('Error: ' + error.message);
    }else{
      console.log(query + " inserted correctly.");

    }
    res.redirect('/single_book.html?id='+bookId);
    res.end();
  })
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

app.get('/id/:email', function(req, res){

  connection.query("select id, email from users where email = '" + req.params.email + "'", function (error, rows, result) {
    if(!!error){
      console.log('Error: ' + error.message);
    }else{
      res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(rows));
    }
    res.end();
  })
})

app.post('/register', async function(req, res) { //We need to put a query within the query
  var name = req.body.name;
  var surname = req.body.surname;
  var email = req.body.email;
  var pwd = req.body.pwd;
  var pwd2 = req.body.pwd2;

  if(pwd != pwd2){
    res.redirect('register.html?WP');
    res.end();
    return;
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
            res.end();
            return;
          }else{
            console.log(email  + " inserted correctly.");
            res.redirect('login.html?SC=' + email);
            res.end();
            return;
          }

        });
      }
      else{ //We would create a token but as it is now we will mantain it with a simple cookie with the username. This would indeed be easily hackable.
        res.redirect('register.html?UT');
        res.end();
        return;
      }

    }

  })
});



app.use('/', express.static(path.join(__dirname, 'public/pages')))

app.use(express.static('public'))

app.listen(1337);
