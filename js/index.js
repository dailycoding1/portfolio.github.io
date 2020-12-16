
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("contain").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("contain").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

/* ------------------------For typography-------------------------------- */

window.onload = function () {
  /* console.log("loaded") */
  var typed = new Typed('#typed', {
    strings: ["Full Stack Web Developer",
      "Freelancer",
      "Singer",
      "And always be Positive :)"],
    backSpeed: 15,
    smartBackspace: false,
    backDelay: 1200,
    startDelay: 1000,
    typeSpeed: 50,
    loop: true,
    
  });
};







/*   window.onload = function (){
  document.getElementById('cont').addEventListener("toggle", function()
    {
        menu = document.getElementById('mySidenav');
        if (menu.style.display == "none") {
            /* menu.style.display == "none"; */
            /* console.log(menu); */
            /* menu.style.width = "250px"; */
            /* document.getElementsByClassName("container1").style.marginLeft = "250px"; */
           /*  document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; */
       /*  } 
        else { */
            /* menu.style.display = "none";
 */
           /*  document.getElementById("mySidenav").style.width = "0"; */
            /* document.getElementsByClassName("container1").style.marginLeft= "0"; */
            /* document.body.style.backgroundColor = "white"; */
/*         }
    });
} */ 