// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Ændre billede
function changeImage(){
var   img = document.getElementById("imagekort");
img.src="https://i.imgur.com/o5M7ceG.png";
return false;
}

//Ænder billede
function changeImage2(){
var img = document.getElementById("imagekort");
img.src="https://www.edrawsoft.com/template/mall-floor-plan.png?fbclid=IwAR2Yc3ai96sVPDALHATM0YXn0nWM6UTHNd3jqJON5OrNGuBTTMYH5-6C_UU";
return false;
}


