// FILE WHERE DATA WILL BE LOADED

//BOOKS.html

function exists(img){ //This checks if the image exists, but it gives errors so well
  var image = new Image();
  var url_image = '../images/' + img;

  image.src = url_image;
  return (image.width == 0) ? false : true;


 }

var descLength = 80;
var titleLength = 20;
var authorLength = 20;

function books(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:1337/books',
    success: function(data){
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
       document.getElementById('book'+i).innerHTML = (data[i].title.length > titleLength) ? data[i].title.substring(0,titleLength) + ' [...]' : data[i].title;
       document.getElementById('desc'+i).innerHTML = (data[i].description.length > descLength) ? data[i].description.substring(0,descLength) + ' [...]' : data[i].description;
       document.getElementById('img'+i).src = (data[i].image != "" && exists(data[i].image)) ? data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
       document.getElementById('auth'+i).innerHTML = (data[i].author.length > authorLength) ? data[i].author.substring(0, authorLength) + ' [...]' : data[i].author;
       document.getElementById('p'+i).innerHTML = data[i].price +'€';
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
       let img =
       document.getElementById('img'+i).src = (data[i].image != "" && exists(data[i].image)) ? data[i].image : "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
     }
    }
  });

}
