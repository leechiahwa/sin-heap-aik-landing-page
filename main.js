// Responsive navigation bar
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar-items") {
    x.className += "responsive";
    // console.log("responsive");
  } else {
    x.className = "navbar-items";
  }
}
