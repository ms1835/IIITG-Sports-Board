// Function to shape navigation bar according to screen size.
function myFunction() {
  	var x = document.getElementById("mynavbar");
  	if (x.className === "navbar") {
    	x.className += " responsive";
  	}
  	else {
    	x.className = "navbar";
  	}
}

// Function to open sidenav on small screens.
function openNav() {
  	document.getElementById("mySidepanel").style.width = "200px";
}

function closeNav() {
  	document.getElementById("mySidepanel").style.width = "0";
}


