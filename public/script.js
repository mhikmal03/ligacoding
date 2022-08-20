const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.NavMenu')


    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })
   
    document.querySelectorAll(".linkItem").forEach(item => {
        item.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    })



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


