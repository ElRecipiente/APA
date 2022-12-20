window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    let magicBanner = document.getElementById('magic-banner')
    let headerHeight = document.getElementById("hvideo").getBoundingClientRect().height
    if (scrollY > headerHeight) {
        magicBanner.style.opacity = 1;
    } else {
        magicBanner.style.opacity = 0;
    }
});
