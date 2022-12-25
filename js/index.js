// // Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// NAVBAR JS START
var nav = document.querySelector('header');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-dark', 'shadow');
  }
})
// NAVBAR JS END
// MODAL IMAGE JS START
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// MODAL IMAGE JS END
// theme change start//

let b = document.getElementById("btnn");
let bx = document.getElementById("box");
btnn.addEventListener('click',function(){
  // box.style.cssText= "background-color:black; color:white" ;
  document.body.style.cssText= "background-color:black; color:white" ;
});

let B = document.getElementById("btnn");
let Bx = document.getElementById("box");
btnnn.addEventListener('click',function(){
  document.body.style.cssText = "background-color:white; color:black";
})

// theme change end//

 // top to bottom //

 window.onscroll = () =>
 {
   toggleTopButton();
 }
 function scrollToTop(){
   window.scrollTo({top:0,behavior:'smooth'});
 }
 function toggleTopButton(){
   if(document.body.scrollTop>20||
     document.documentElement.scrollTop>20
     ){
       document.getElementById('back-to-up').classList.remove('d-none');
     }else{
       document.getElementById('back-to-up').classList.add('d-none');
     }
 };
//  ScrollFade 0.1
 
 var fadeElements = document.getElementsByClassName('scrollFade');
 
 function scrollFade() {
   var viewportBottom = window.scrollY + window.innerHeight;
 
   for (var index = 0; index < fadeElements.length; index++) {
     var element = fadeElements[index];
     var rect = element.getBoundingClientRect();
 
     var elementFourth = rect.height/4;
     var fadeInPoint = window.innerHeight - elementFourth;
     var fadeOutPoint = -(rect.height/2);
 
     if (rect.top <= fadeInPoint) {
       element.classList.add('scrollFade--visible');
       element.classList.add('scrollFade--animate');
       element.classList.remove('scrollFade--hidden');
     } else {
       element.classList.remove('scrollFade--visible');
       element.classList.add('scrollFade--hidden');
     }
 
     if (rect.top <= fadeOutPoint) {
       element.classList.remove('scrollFade--visible');
       element.classList.add('scrollFade--hidden');
     }
   }
 }
 
 document.addEventListener('scroll', scrollFade);
 window.addEventListener('resize', scrollFade);
 document.addEventListener('DOMContentLoaded', function() {
     scrollFade();
 });



