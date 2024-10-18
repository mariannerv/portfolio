function myFunction() {
    var nav = document.getElementById("myTopnav").getElementsByTagName("nav")[0];
    if (nav.className === "") {
        nav.className = "active"; // Show the nav links
    } else {
        nav.className = ""; // Hide the nav links
    }
}
