const bannerScroll = document.querySelector(".arrow-bottom");

bannerScroll.addEventListener("click", () => {
    if (scrollY < headerHeight) {
        window.scrollTo(0, headerHeight);
    }
});
