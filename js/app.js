$('.header').load('../common/header.html');
$('.background').load('../common/background.html');

/////////////

$("a.highlight").click(function(){
  $("a.highlight").scss("background-color", "black");
$(this).scss("background-color", "red");
});
/////////////

var plalogDiv = document.getElementById("plalogDiv");
let d1 = document.getElementById("d1");

var SPMDiv = document.getElementById("SPMDiv");
let d2 = document.getElementById("d2");

if(plalogDiv){
plalogDiv.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  })
}
if(SPMDiv){
  SPMDiv.addEventListener("click", () => {
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  })
}

////////////////////////: Js Button ////////////////////////
  function flipCover (css, options) {
    var options = options || {}
    if (typeof css === "object") {
      options = css
    } else {
      options.css = css
    }
  
    var css = options.css
    var url = options.url
    var text = options.text || css
    var width = options.width
    var height = options.height
  
    var $section = $(".flip-cover-" + css).addClass(css + "-section")
    var $button = $("<div>").addClass(css + "-button")
    var $cover = $("<div>").addClass(css + "-cover")
    var $outer = $("<div>").addClass(css + "-outer")
    var $inner = $("<div>").addClass(css + "-inner")
  
    if (width) {
      $section.css("width", width)
    }
  
    if (height) {
      $section.css("height", height)
  
      var lineHeight = ':after{ line-height: ' + height + ';}'
      var $outerStyle = $('<style>').text('.' + css + '-outer' + lineHeight)
      $outerStyle.appendTo($outer)
      var $innerStyle = $('<style>').text('.' + css + '-inner' + lineHeight)
      $innerStyle.appendTo($inner)
    }
  
    $cover.html($outer)
    $inner.insertAfter($outer)
  
    $button.html($("<a>").text(text).attr("href", url))
  
    $section.html($button)
    $cover.insertAfter($button)
   }


  flipCover({
    css: "springBoot",
    text: "Spring Boot",
    width: "72px",
    height:"20px"
  })

  flipCover("hibernate", {
    text: "Hibernate",
    width: "72px",
    height:"20px"
  })

  flipCover("jpa", {
    text: "Spring Data JPA",
    width: "72px",
    height:"20px"
  })
  
  flipCover("angular", {
    text: "Angular",
    width: "72px",
    height:"20px"    
  })
  
  flipCover("bootstrap", {
    text: "Bootstrap",
    width: "72px",
    height:"20px"
  })

  flipCover("jquery", {
    text: "JQuery",
    width: "72px"
  })

  flipCover({
    css: "JS",
    text: "Java Script",
    width: "72px"  
  })

  flipCover({
    css: "NoSQL",
    text: "NoSQL",
    width: "72px"  
  })

  flipCover({
    css: "HTML",
    text: "HTML 5",
    width: "72px"  
  })

  flipCover({
    css: "CSS",
    text: "CSS3 / FlexBox ",
    width: "72px"  
  })
  
  flipCover({
    css: "Jquery2",
    text: "JQuery ",
    width: "72px"  
  })
  
  flipCover({
    css: "Bootstrapp2",
    text: "Bootstrap ",
    width: "72px"  
  })

  flipCover({
    css: "react",
    text: "React JS ",
    width: "72px"  
  })
  
  flipCover({
    css: "RWD",
    text: "Responsive",
    width: "72px"  
  })
  
//////////////////////////////////////////////