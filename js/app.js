$('.header').load('../common/header.html');
$('.background').load('../common/background.html');

let plalogDiv = document.getElementById("plalogDiv");
let d1 = document.getElementById("d1");

let SPMDiv = document.getElementById("SPMDiv");
let d2 = document.getElementById("d2");

plalogDiv.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  })

  SPMDiv.addEventListener("click", () => {
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  })

