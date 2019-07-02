

function request(){
  $.get("http://localhost:1337/", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });
}
