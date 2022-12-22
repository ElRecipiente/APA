const bannerScroll = document.querySelector(".arrow-bottom");

bannerScroll.addEventListener("click", () => {
    if (scrollY < headerHeight - 100) {
        window.scrollTo(0, headerHeight);
    }
});
