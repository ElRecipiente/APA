window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  let magicBanner = document.getElementById("magic-banner");
  let headerHeight = document
    .getElementById("hvideo")
    .getBoundingClientRect().height;
  if (scrollY > headerHeight) {
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
