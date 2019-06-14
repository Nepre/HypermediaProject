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
    document.getElementById('logreg').style = "";
    document.getElementById('prof').style = "white-space: nowrap; display:none;";
    document.getElementById('cart').style = "white-space: nowrap; display:none;";
    document.getElementById('logout').style = "white-space: nowrap; display:none;";

  }

}


//SINGLE_BOOK.HTML
// TODO: do the petition with the url id to http://localhost:1337/single_book/id
// get the id from url. Example: http://localhost:1337/single_book.html?id=1
// get related books from same genre and or author perhaps?

function single_book(){

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
  //console.log(document.querySelector('input[name="filters"]:checked').value);
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

}


//Authors.html

var descLength = 80;
var authorLength = 20;

function authors(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/authors',
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length;  i++) {
       document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
       document.getElementById('img'+i).src = (data[i].image != "" && exists(data[i].image)) ? data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
       document.getElementById('auth'+i).innerHTML = (data[i].author.length > authorLength) ? data[i].author.substring(0, authorLength) + ' [...]' : data[i].author;
       document.getElementById('link'+i).href = 'single_author.html?id='+data[i].id;
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
    case 'Genre':
      urla = 'http://localhost:1337/authors/Genre';
      break;
  }
  $.ajax({
    type: 'GET',
    url: urla,
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
        document.getElementById('img'+i).src = (data[i].image != "" && exists(data[i].image)) ? data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
        document.getElementById('auth'+i).innerHTML = (data[i].author.length > authorLength) ? data[i].author.substring(0, authorLength) + ' [...]' : data[i].author;
        document.getElementById('link'+i).href = 'single_author.html?id='+data[i].id;
           }
    }
  });

}
function single_event(){

}


//EVENTS.html

var descLength = 80;
var eventLength = 20;
var dateLength = 10;




function events(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/events',
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
       document.getElementById('date'+i).innerHTML = (data[i].date.length > dateLength) ? data[i].date.substring(0,dateLength) + ' [...]' : data[i].date;
       document.getElementById('event'+i).innerHTML = (data[i].title.length > eventLength) ? data[i].title.substring(0,eventLength) + ' [...]' : data[i].event;
       document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
       document.getElementById('img'+i).src = (data[i].image != "") ? path + data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
       document.getElementById('link'+i).href = 'single_event.html?id='+data[i].id;
     }
    }
  });
}

function reloadBooksFilter(){
  var urla = "";
  //console.log(document.querySelector('input[name="filters"]:checked').value);
  switch (document.querySelector('input[name="filters"]:checked').value) {
    case 'JENUARY':
      urla = 'http://localhost:1337/events/jenuary';
      break;
    case 'FEBRUARY':
      urla = 'http://localhost:1337/events/february';
      break;
    case 'MARCH':
      urla = 'http://localhost:1337/events/march';
      break;
    case 'APRIL':
      urla = 'http://localhost:1337/events/april';
      break;
      case 'MAY':
        urla = 'http://localhost:1337/events/may';
        break;
      case 'JUNE':
        urla = 'http://localhost:1337/events/june';
        break;
      case 'JULY':
        urla = 'http://localhost:1337/events/july';
        break;
      case 'AUGUST':
        urla = 'http://localhost:1337/events/august';
        break;
        case 'SEPTEMBER':
          urla = 'http://localhost:1337/events/september';
          break;
        case 'OCTOBER':
          urla = 'http://localhost:1337/events/october';
          break;
        case 'NOVEMBER':
          urla = 'http://localhost:1337/events/november';
          break;
        case 'DECEMBER':
          urla = 'http://localhost:1337/events/december';
          break;
    default:
    urla = 'http://localhost:1337/events';
  }
  $.ajax({
    type: 'GET',
    url: urla,
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
        document.getElementById('date'+i).innerHTML = (data[i].date.length > dateLength) ? data[i].date.substring(0,dateLength) + ' [...]' : data[i].date;
        document.getElementById('event'+i).innerHTML = (data[i].title.length > eventLength) ? data[i].title.substring(0,eventLength) + ' [...]' : data[i].event;
        document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
        document.getElementById('img'+i).src = (data[i].image != "") ? path + data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
        document.getElementById('link'+i).href = 'single_event.html?id='+data[i].id;
      }
    }
  });

}
