// FILE WHERE DATA WILL BE LOADED

//AUX FUNCTIONS

function setCookie(name, value, exdays) {
    var d, expires;
    exdays = exdays || 1;
    d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
}

function exists(img){ //This checks if the image exists, but it gives errors so well
  var request = new XMLHttpRequest();
  var status;
  var statusText;
  request.open("GET", path + img, true);
  request.send();
  request.onload = function(){
  	status = request.status;
  	statusText = request.statusText;
  }
}

function existsAuth(img){ //This checks if the image exists, but it gives errors so well
  var request = new XMLHttpRequest();
  var status;
  var statusText;
  request.open("GET", path3 + img, true);
  request.send();
  request.onload = function(){
  	status = request.status;
  	statusText = request.statusText;
  }
}

//LOGIN CHECKER
window.onload = function loginChecker() {
  var cookie, c;
  var name = 'login';
  var login = false;
  var usu;

  cookies = document.cookie.split(';');

  for (var i=0; i < cookies.length; i++) {
      c = cookies[i].split('=');
      if (c[0] == name) {

          usu = c[1];
          login = true;
          break;
      }
  }

  if(login){
    document.getElementById('logreg').style = "display:none;";
    document.getElementById('prof').style = "white-space: nowrap;";
    document.getElementById('cart').style = "white-space: nowrap;";
    document.getElementById('logout').style = "white-space: nowrap;";

  }
  else {
    if(window.location.pathname == '/cart.html' || window.location.pathname == '/profile.html'){
      window.location.href = "http://localhost:1337/index.html";
    }
    document.getElementById('logreg').style = "";
    document.getElementById('prof').style = "white-space: nowrap; display:none;";
    document.getElementById('cart').style = "white-space: nowrap; display:none;";
    document.getElementById('logout').style = "white-space: nowrap; display:none;";

  }

}

function buttonBuy() {
  var cookie, c;
  var name = 'login';
  var login = false;
  var usu;

  cookies = document.cookie.split(';');

  for (var i=0; i < cookies.length; i++) {
      c = cookies[i].split('=');
      if (c[0] == name) {

          usu = c[1];
          login = true;
          break;
      }
  }
  if(login){
    document.getElementById('butBuy').style = "";
    document.getElementById('sub').value = window.location.href.split("?")[1].split("=")[1];
  }
}

function submitCommentButton() {
  var cookie, c;
  var name = 'login';
  var login = false;
  var usu;

  cookies = document.cookie.split(';');

  for (var i=0; i < cookies.length; i++) {
      c = cookies[i].split('=');
      if (c[0] == name) {

          usu = c[1];
          login = true;
          break;
      }
  }
  if(login){
    document.getElementById('formID').style = "";

    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/id/'+usu,
      success: function(data){
        console.log(data);
        document.getElementById('id').value = data[0].id;

      }
    });

  }
}




//SINGLE_BOOK.HTML
// TODO: do the petition with the url id to http://localhost:1337/single_book/id
// get the id from url. Example: http://localhost:1337/single_book.html?id=1
// get related books from same genre and or author perhaps?

function single_book(){

  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/single_book/'+window.location.href.split("?")[1].split("=")[1],
    success: function(data){
      console.log(data);
      let dat = data[0];

      document.getElementById('title').innerHTML = dat.title;
      document.getElementById('genre').innerHTML = dat.genre;
      document.getElementById('author').innerHTML = dat.Name;
      document.getElementById('date').innerHTML = dat.date;
      document.getElementById('desc').innerHTML = dat.description;
      document.getElementById('descAuth').innerHTML = dat.Biography;
      document.getElementById('price').innerHTML = dat.price+"€";
      document.getElementById('img').src = path + dat.image;


    }
  });



  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/single_book/'+window.location.href.split("?")[1].split("=")[1]+"/related",
    success: function(data){

      for (var i = 0; i < 3; i++) {
        if(i >= data.length){
          document.getElementById('st'+i).style = "display: none;";
        }
        else{
          document.getElementById('rel'+i).src = path+data[i].image;
          document.getElementById('l'+i).href = 'single_book.html?id='+data[i].id2;
        }
      }

    }
  });

  loadComments();
}

function loadComments() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/single_book/'+window.location.href.split("?")[1].split("=")[1]+"/comments",
    success: function(data){

      for (var i = 0; i < data.length || data.length == 10; i++) {
        document.getElementById("comments").innerHTML += "<h6>" + data[i].Name + "</h6>";
        document.getElementById("comments").innerHTML += "<p>" + data[i].comment + "</p><br>";

      }
      document.getElementById('formID').action = "/single_book/postComent/"+window.location.href.split("?")[1].split("=")[1];

    }
  });
}

//BOOKS.html

var descLength = 80;
var titleLength = 20;
var authorLength = 20;
var path = "../images/avatar/";



function books(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/books',
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
       document.getElementById('book'+i).innerHTML = (data[i].title.length > titleLength) ? data[i].title.substring(0,titleLength) + ' [...]' : data[i].title;
       document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
       document.getElementById('img'+i).src = (data[i].image != "") ? path + data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
       document.getElementById('auth'+i).innerHTML = (data[i].author.length > authorLength) ? data[i].author.substring(0, authorLength) + ' [...]' : data[i].author;
       document.getElementById('p'+i).innerHTML = data[i].price +'€';
       document.getElementById('book'+i).href = 'single_book.html?id='+data[i].id;
       document.getElementById('aimg'+i).href = 'single_book.html?id='+data[i].id;
     }
    }
  });
}

function reloadBooksFilter(){
  var urla = "";
  console.log(document.querySelector('input[name="filters"]:checked').value);
  switch (document.querySelector('input[name="filters"]:checked').value) {
    case 'Available':
      urla = 'http://localhost:1337/books/available';
      break;
    case 'Author':
      urla = 'http://localhost:1337/books/author';
      break;
    case 'Genre':
      urla = 'http://localhost:1337/books/genre';
      break;
    case 'Theme':
      urla = 'http://localhost:1337/books/theme';
      break;
    default:
    urla = 'http://localhost:1337/books';
  }
  $.ajax({
    type: 'GET',
    url: urla,
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.getElementById('book'+i).innerHTML = (data[i].title.length > titleLength) ? data[i].title.substring(0,titleLength) + ' [...]' : data[i].title;
        document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
        document.getElementById('img'+i).src = (data[i].image != "") ? path + data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
        document.getElementById('auth'+i).innerHTML = (data[i].author.length > authorLength) ? data[i].author.substring(0, authorLength) + ' [...]' : data[i].author;
        document.getElementById('p'+i).innerHTML = data[i].price +'€';
        document.getElementById('book'+i).href = 'single_book.html?id='+data[i].id;
        document.getElementById('aimg'+i).href = 'single_book.html?id='+data[i].id;
      }
    }
  });

}
function single_author(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/authors/'+window.location.href.split("?")[1].split("=")[1],
    success: function(data){
      //console.log('lapin malin',data[0]);
      let dat = data[0];

      document.getElementById('Birth').innerHTML = dat.Birthday.substring(0,10);
      document.getElementById('Nat').innerHTML = dat.Nationality;
      document.getElementById('bio').innerHTML = dat.Biography;
      document.getElementById('img').src = path3 + dat.image;


    }
  });

  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/authors/books/'+window.location.href.split("?")[1].split("=")[1],
    success: function(data){
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.getElementById('books').innerHTML += `
        <a href="http://localhost:1337/single_book.html?id=`+data[i].id+`">- `+data[i].title+`</a><br><br>
      `;
      }

    }
  });
}


//Authors.html

var descLength = 80;
var authorLength = 20;
var path3 = "../images/authors/";

function authors(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/authors',
    success: function(data){
      console.log(data);
      for (var i = 0; i < 9; i++) {
        console.log(i);
        if(i >= data.length){
          document.getElementById('st'+i).style = "display: none;"
        }
        else{
          document.getElementById('desc'+i).innerHTML = (data[i].Biography.length > descLength) ? data[i].Biography.substring(0,descLength) + ' [...]' : data[i].Biography;
          document.getElementById('img'+i).src = (data[i].image != "") ? path3 + data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
          document.getElementById('auth'+i).innerHTML = (data[i].Name.length > authorLength) ? data[i].Name.substring(0, authorLength) + ' [...]' : data[i].Name;
          document.getElementById('link'+i).href = 'single_author.html?id='+data[i].id;
          document.getElementById('linka'+i).href = 'single_author.html?id='+data[i].id;

        }
      }
    }
  });
}

function reloadauthorsFilter(){
  var urla = "";
  //console.log(document.querySelector('input[name="filters"]:checked').value);
  switch (document.querySelector('input[name="filters"]:checked').value) {
    case 'Nationality':
      urla = 'http://localhost:1337/authors/Nationality';
      break;
    case 'Birthday':
      urla = 'http://localhost:1337/authors/Birthday';
      break;
    default:
    urla = 'http://localhost:1337/authors';
  }
  $.ajax({
    type: 'GET',
    url: urla,
    success: function(data){
      //console.log(data);
      for (var i = 0; i < 9; i++) {
        //console.log(data);
        if(i >= data.length){
          document.getElementById('st'+i).style = "display: none;"
        }
        else{
          document.getElementById('desc'+i).innerHTML = (data[i].Biography.length > descLength) ? data[i].Biography.substring(0,descLength) + ' [...]' : data[i].Biography;
          document.getElementById('img'+i).src = (data[i].image != "") ? path3 + data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
          document.getElementById('auth'+i).innerHTML = (data[i].Name.length > authorLength) ? data[i].Name.substring(0, authorLength) + ' [...]' : data[i].Name;
          document.getElementById('link'+i).href = 'single_author.html?id='+data[i].id;
          document.getElementById('linka'+i).href = 'single_author.html?id='+data[i].id;

        }
      }
    }
  });

}

//INDEX.HTML
function index(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/Bestsellers',
    success: function(data){
      console.log(data);
      for (var i = 0; i < 3; i++) {
        console.log(i);
        if(i >= data.length){
          document.getElementById('stb'+i).style = "display: none;"
        }
        else{
          document.getElementById('bi'+i).src = path+data[i].image;
          document.getElementById('b'+i).innerHTML = data[i].title;
          document.getElementById('lb'+i).href = 'single_book.html?id='+data[i].id;
          document.getElementById('lbi'+i).href = 'single_book.html?id='+data[i].id;
          document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
        }
      }
    }
  });

  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/NextEvents',
    success: function(data){
      console.log(data);
      for (var i = 0; i < 2; i++) {
        console.log(i);
        document.getElementById('ei'+i).src = path2 + data[i].Picture;
        document.getElementById('e'+i).innerHTML = data[i].Name;
        document.getElementById('desce'+i).innerHTML = data[i].Place;
        document.getElementById('li'+i).href = 'http://localhost:1337/single_event.html?id='+data[i].id;
        document.getElementById('lit'+i).href = 'http://localhost:1337/single_event.html?id='+data[i].id;


      }
    }
  });
}


function single_event(){

  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/events/'+window.location.href.split("?")[1].split("=")[1],
    success: function(data){
      console.log(data);
      let dat = data[0];
      document.getElementById('title').innerHTML = dat.Name;
      document.getElementById('date').innerHTML = dat.Starting_Date.substring(0,10) + " / " + dat.End_Date.substring(0, 10);
      document.getElementById('place').innerHTML = dat.Place;
      document.getElementById('price').innerHTML = dat.Price + "€";
      document.getElementById('img').src = path2 + dat.Picture;
    }
  });

}


//EVENTS.html

var descLength = 80;
var eventLength = 20;
var dateLength = 10;


var path2 = "../images/events/";

function events(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/events',
    success: function(data){
      console.log(data);
      for (var i = 0; i < 9; i++) {
        if (i >= data.length) {
          document.getElementById('st'+i).style = 'display: none;';
        }
        else{
           document.getElementById('date'+i).innerHTML = data[i].Starting_Date.substring(0, 10) + "/" + data[i].End_Date.substring(0,10);
           document.getElementById('tit'+i).innerHTML = (data[i].Name.length > eventLength) ? data[i].Name.substring(0,eventLength) + ' [...]' : data[i].Name;
           document.getElementById('desc'+i).innerHTML = (data[i].Place.length > descLength) ? data[i].Place.substring(0,descLength) + ' [...]' : data[i].Place;
           document.getElementById('aimg'+i).src = (data[i].Picture != "") ? path2 + data[i].Picture : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
           document.getElementById('tit'+i).href = 'single_event.html?id='+data[i].id;
       }
     }
    }
  });
}

function reloadEventsFilter(){
  var urla = "";
  //console.log(document.querySelector('input[name="filters"]:checked').value);
  switch (document.querySelector('input[name="filters"]:checked').value) {
    case 'JANUARY':
      urla = 'http://localhost:1337/events/month/january';
      break;
    case 'FEBRUARY':
      urla = 'http://localhost:1337/events/month/february';
      break;
    case 'MARCH':
      urla = 'http://localhost:1337/events/month/march';
      break;
    case 'APRIL':
      urla = 'http://localhost:1337/events/month/april';
      break;
      case 'MAY':
        urla = 'http://localhost:1337/events/month/may';
        break;
      case 'JUNE':
        urla = 'http://localhost:1337/events/month/june';
        break;
      case 'JULY':
        urla = 'http://localhost:1337/events/month/july';
        break;
      case 'AUGUST':
        urla = 'http://localhost:1337/events/month/august';
        break;
      case 'SEPTEMBER':
        urla = 'http://localhost:1337/events/month/september';
        break;
      case 'OCTOBER':
        urla = 'http://localhost:1337/events/month/october';
        break;
      case 'NOVEMBER':
        urla = 'http://localhost:1337/events/month/november';
        break;
      case 'DECEMBER':
        urla = 'http://localhost:1337/events/month/december';
        break;
    default:
    urla = 'http://localhost:1337/events';
  }
  $.ajax({
    type: 'GET',
    url: urla,
    success: function(data){
      console.log(data);
      console.log(urla);
      if (data.length == 0) {
        document.getElementById('noEvents').style = '';
      }
      else {
        document.getElementById('noEvents').style = 'display: none';
      }
      for (var i = 0; i < 9; i++) {
        if (i >= data.length) {
          document.getElementById('st'+i).style = 'display: none;';
        }
        else{
           document.getElementById('date'+i).innerHTML = data[i].Starting_Date.substring(0, 10) + "/" + data[i].End_Date.substring(0,10);
           document.getElementById('tit'+i).innerHTML = (data[i].Name.length > eventLength) ? data[i].Name.substring(0,eventLength) + ' [...]' : data[i].Name;
           document.getElementById('desc'+i).innerHTML = (data[i].Place.length > descLength) ? data[i].Place.substring(0,descLength) + ' [...]' : data[i].Place;
           document.getElementById('aimg'+i).src = (data[i].Picture != "") ? path2 + data[i].Picture : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";
           document.getElementById('tit'+i).href = 'single_event.html?id='+data[i].id;
           document.getElementById('st'+i).style = '';
       }
     }
    }
  });

}


//CART.HTML

function cart() {

  var cookie, c;
  var b = 0;
  var e = 0;
  var books = [];
  var events = [];
  var insert = false;
  var full = false;

  cookies = document.cookie.split(';');

  for (var i=0; i < cookies.length; i++) {
    c = cookies[i].split('=');
    console.log(c);

    if(window.location.href.split("?")[1] != undefined && (window.location.href.split("?")[1].split("=")[0] == "b" || window.location.href.split("?")[1].split("=")[0] == "e")  && c[1] == window.location.href.split("?")[1].split("=")[1]){
      insert = true;
    }

    if(window.location.href.split("?")[1] != undefined && window.location.href.split("?")[1].split("=")[0] == "dele" && c[1] == window.location.href.split("?")[1].split("=")[1]){
      setCookie( c[0], '', -1);
      window.location.replace("http://localhost:1337/cart.html");
    }

    if(window.location.href.split("?")[1] != undefined && window.location.href.split("?")[1].split("=")[0] == "delb" && c[1] == window.location.href.split("?")[1].split("=")[1]){
      setCookie( c[0], '', -1);
      window.location.replace("http://localhost:1337/cart.html");
    }

    if (c[0][1] == 'b') {
      books.push(c[1]);
      full = true;
      document.getElementById('cartEmpty').style = "display:none;";

      document.getElementById('objs').innerHTML += `
      <span id="b` + b + `">
        <h3 id="titb` + b + `">Object 1</h3>
        <div class="row">
          <div class="col-md-4">
            <a id="aimgb`+ b +`" href="single_book.html">
              <img id="imgb`+ b +`" src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" style="width:5em; height:6xem;" alt="No book yet">
            </a>
          </div>
          <div class="col-md-2">
            <h6>Price: <span id="priceb`+ b +`">6</span>€ </h6>
            <h6>Quantity: <input id="cuantb`+ b +`" type="number" name="quantity" min="1" max="51" value="1" onchange="price();"></h6>
            <h6><a id="delb`+ b +`" href="#"><i class="material-icons">delete</i></a></h6>

          </div>
          <div class="col-md-6">
          </div>
        </div>
      </span>`;
      b++;
    }
    if (c[0][1] == 'e') {
      events.push(c[1]);
      full = true;
      document.getElementById('cartEmpty').style = "display:none;";

      document.getElementById('objs').innerHTML += `
      <span id="e` + e + `">
        <h3 id="tite` + e + `">Object 1</h3>
        <div class="row">
          <div class="col-md-4">
            <a id="aimge`+ e +`" href="single_event.html">
              <img id="imge`+ e +`" src="https://ibf.org/site_assets/img/placeholder-book-cover-default.png" style="width:5em; height:6xem;" alt="No book yet">
            </a>
          </div>
          <div class="col-md-2">
            <h6>Price: <span id="pricee`+ e +`">6</span>€ </h6>
            <h6>Quantity: <input id="cuante`+ e +`" type="number" name="quantity" min="1" max="51" value="1" onchange="price();"></h6>
            <h6><a id="dele`+ e +`" href="#"><i class="material-icons">delete</i></a></h6>
          </div>
          <div class="col-md-6">
          </div>
        </div>
      </span>`;
      e++;
    }
  }
  console.log(full);


  if(window.location.href.split("?")[1] != undefined && window.location.href.split("?")[1].split("=")[0] == 'e' && !insert){
    setCookie("e"+e, window.location.href.split("?")[1].split("=")[1], 1);
    window.location.replace("http://localhost:1337/cart.html");
  }

  if(window.location.href.split("?")[1] != undefined && window.location.href.split("?")[1].split("=")[0] == 'b' && !insert){
    setCookie("b"+b, window.location.href.split("?")[1].split("=")[1], 1);
    window.location.replace("http://localhost:1337/cart.html");

  }

  for (var i = 0; i < e; i++) {
    let num = i;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/events/'+events[i],
      success: function(data){
        document.getElementById('tite'+num).innerHTML = data[0].Name;
        document.getElementById('aimge'+num).href = 'single_event.html?id='+events[num];
        document.getElementById('imge'+num).src = path2 + data[0].Picture;
        document.getElementById('pricee'+num).innerHTML = data[0].Price;
        document.getElementById('dele'+num).href = "http://localhost:1337/cart.html?dele=" + events[num];
      }
    });
  }

  for (var i = 0; i < b; i++) {
    let num = i;
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1337/single_book/'+books[i],
      success: function(data){
        console.log(data);
        document.getElementById('titb'+num).innerHTML = data[0].title;
        document.getElementById('aimgb'+num).href = 'single_event.html?id='+books[num];
        document.getElementById('imgb'+num).src = path + data[0].image;
        document.getElementById('priceb'+num).innerHTML = data[0].price;
        document.getElementById('delb'+num).href = "http://localhost:1337/cart.html?delb=" + books[num];
      }
    });
  }

}

function profile(){
  var cookie, c;
  var name = 'login';
  var usu;

  cookies = document.cookie.split(';');

  for (var i=0; i < cookies.length; i++) {
      c = cookies[i].split('=');
      if (c[0] == name) {

          usu = c[1];
          break;
      }
  }

  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/user/'+usu,
    success: function(data){
      console.log(data);
      document.getElementById('name').innerHTML = data[0].name;
      document.getElementById('surname').innerHTML = data[0].surname;
      document.getElementById('email').innerHTML = data[0].email;
    }
  });
}

function price() {
  var objs = document.getElementById('objs');
  var total = 0;
  var b, e;
  b = e = 0;
  for (var i=0; i < cookies.length; i++) {
    c = cookies[i].split('=');

    if (c[0][1] == 'b') {
      b++;
    }
    if (c[0][1] == 'e') {
      e++;
    }
  }
  for (var i = 0; i < b; i++) {
    total += parseInt(document.getElementById('priceb'+i).innerHTML) * parseInt(document.getElementById('cuantb'+i).value);
  }
  for (var i = 0; i < e; i++) {
    total += parseInt(document.getElementById('pricee'+i).innerHTML) * parseInt(document.getElementById('cuante'+i).value);
  }

  document.getElementById('total').innerHTML = total;
}
