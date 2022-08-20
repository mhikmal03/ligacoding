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



