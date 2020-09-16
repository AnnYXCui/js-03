

var slideIndex = 1;
var dotString= ""

dotString +=
 "<div class='dot' onclick='currentSlide(1)'></div>"+
 "<div class='dot' onclick='currentSlide(2)'></div>"+
 "<div class='dot' onclick='currentSlide(3)'></div>";

function plusSlides(n) {
  //console.log("inside plusSlides with a value of " + n);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  //console.log(n);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  //console.log("inside showSlides with a value of " + n);

  var slides = document.getElementsByClassName("my-slides");
  var dots = document.getElementsByClassName("dot");
  //console.log(slides);

  //resets it end node
  if (n < 1) {
    //console.log("inside the if ");
    slideIndex = slides.length;
  }

  if (n > slides.length) {
    slideIndex = 1;
  }

//build the dots

  //hide the slideshow
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //change dot active for each slide
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }

   // show the first slide when the page first loads
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";

}

document.getElementById("dotbox").innerHTML = dotString;
showSlides(slideIndex);
