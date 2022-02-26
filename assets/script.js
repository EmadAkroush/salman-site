function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    var my = document.getElementById("myid");
    my.classList.toggle("myclass");
    var hide = document.getElementById("hide");
    hide.classList.toggle("showhide")
  }
