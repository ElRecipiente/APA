// LA BANNIERE
const bannerScroll = document.querySelector(".arrow-bottom");
let scroll = this.scrollY;
let magicBanner = document.getElementById("magic-banner");
let headerHeight = document
  .getElementById("hvideo")
  .getBoundingClientRect().height;

// window.addEventListener("scroll", () => {
//     const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
//     console.log(scrollTop, clientHeight, scrollHeight);
// })

bannerScroll.addEventListener("click", () => {
  if (scrollY < headerHeight) {
    window.scrollTo(0, headerHeight - 200);
  }
});

window.addEventListener("scroll", (event) => {
  if (scrollY >= headerHeight - 200) {
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
  let links = document.querySelector(".flex-nav nav ul");

  if (window.getComputedStyle(links).display == "none") {
    links.style.display = "block";
    flexNav.style.height = "100vh";
  } else {
    links.style.display = "none";
    flexNav.style.height = "";
  }
});
