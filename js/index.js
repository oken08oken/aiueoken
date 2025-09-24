const siteWidth = document.querySelector(".site-width");
window.addEventListener("resize", (e) => {
  siteWidth.textContent = window.innerWidth;
});

const raContentOver = document.querySelectorAll(".ra-over");
const raContentUnder = document.querySelectorAll(".ra-under");
