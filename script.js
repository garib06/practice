document.getElementById("demo").innerHTML = "Hello JavaScript!";
document.getElementById("demo").style.fontSize = "20px";
document.getElementById("demo").style.color = "red";
document.getElementById("demo").style.textAlign = "center";
function myfunction() {
    alert("You are going to Valorant Website!");
}


const x = document.getElementById("demo1");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
