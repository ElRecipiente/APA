// LA BANNIERE
let magicBanner = document.getElementById("magic-banner");
let scroll = this.scrollY;

let headerHeight = document
  .getElementById("hvideo")
  .getBoundingClientRect().height;

window.addEventListener("scroll", (event) => {
  if (scrollY >= headerHeight - 100) {
    magicBanner.style.opacity = 1;
  } else {
    magicBanner.style.opacity = 0;
  }
});

// Menu Hamburger
const burger = document.querySelector(".burger");
const flexNav = document.querySelector(".flex-nav");

burger.addEventListener("click", () => {
  //   console.log(burger);
  burger.classList.toggle("active");
  let links = document.querySelector("#magic-banner nav ul");

  if (window.getComputedStyle(links).display == "none") {
    links.style.display = "block";
    flexNav.style.height = "100vh";
  } else {
    links.style.display = "none";
    flexNav.style.height = "";
  }
});
