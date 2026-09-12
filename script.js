const logo = document.querySelector(".logoleft");
const title = document.querySelector("app-title");
const searchBox = document.querySelector(".search-box");
const icon = document.querySelector(".search-icon");

icon.addEventListener('click', 
function() {
 searchBox.style.display = "none";    // Itago ang search box
    logo.style.display = "block";        // Ibalik ang logo
    title.style.display = "block";       // Ibalik ang title
    icon.src = "https://cdn-icons-png.flaticon.com/512/622/622669.png"; // Ibalik sa Magnifying glass
  }
  else {
    searchBox.style.display = "block";   // Ilabas ang search box!
    logo.style.display = "none";         // Itago ang logo!
    title.style.display = "none";        // Itago ang title!
    icon.src = "https://cdn-icons-png.flaticon.com/512/2961/2961937.png"; // Palitan ng icon na 'X'!
}
});
