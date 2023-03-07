searchFormBtn.addEventListener("click", () => {
    location.hash = "search=";
});

headerArrow.addEventListener("click", () => {
    location.hash = "home";
});

trendingPreviewButton.addEventListener("click", () => {
    location.hash = "trends";
})

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
    if (location.hash.startsWith("#trends")) {
        trendsPage();
    } else if (location.hash.startsWith("#search=")) {
        searchPage();
    } else if (location.hash.startsWith("#movie=")) {
        movieDetailsPage();
    } else if (location.hash.startsWith("#category=")) {
        categoryPage();
    } else{
        homePage();
    }

    window.scrollTo(0,0);
    // Otra manera de hacer el scroll hacia arriba:
    // document.body.scrollTop = 0;
}

function homePage() {
    headerSection.classList.remove("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.add("inactive");
    headerTitleCategoryView.classList.add("inactive");
    headerTitle.classList.remove("inactive");
    searchForm.classList.remove("inactive");
    asideMenu.classList.add("inactive");
    toggleLine1.classList.remove("toggleIcon-line1Active");
    toggleLine2.classList.remove("toggleIcon-line2Active");
    toggleLine3.classList.remove("toggleIcon-line3Active");

    trendingPreviewSection.classList.remove("inactive");
    verticalListSection.classList.add("inactive");
    movieDetailSection.classList.add("inactive");

    getTrendingMoviesPreview();
    getTrendingSeriesPreview();
    getCategoriesPreview();
}
function searchPage() {
    console.log("Buscando!");
    headerSection.classList.remove("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerTitleCategoryView.classList.remove("inactive");
    headerTitle.classList.add("inactive");
    searchForm.classList.remove("inactive");
    asideMenu.classList.add("inactive");
    toggleLine1.classList.remove("toggleIcon-line1Active");
    toggleLine2.classList.remove("toggleIcon-line2Active");
    toggleLine3.classList.remove("toggleIcon-line3Active");

    trendingPreviewSection.classList.add("inactive");
    verticalListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    getCategoriesPreview();
}
function movieDetailsPage() {
    console.log("Movie detail");
    headerSection.classList.add("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerTitleCategoryView.classList.add("inactive");
    headerTitle.classList.add("inactive");
    searchForm.classList.add("inactive");
    asideMenu.classList.add("inactive");
    toggleLine1.classList.remove("toggleIcon-line1Active");
    toggleLine2.classList.remove("toggleIcon-line2Active");
    toggleLine3.classList.remove("toggleIcon-line3Active");

    trendingPreviewSection.classList.add("inactive");
    verticalListSection.classList.add("inactive");
    movieDetailSection.classList.remove("inactive");

    getCategoriesPreview();
}
function trendsPage() {
    console.log("Estas en la pagina de tendencias!");
    headerSection.classList.remove("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerTitleCategoryView.classList.remove("inactive");
    headerTitle.classList.add("inactive");
    searchForm.classList.add("inactive");
    asideMenu.classList.add("inactive");
    toggleLine1.classList.remove("toggleIcon-line1Active");
    toggleLine2.classList.remove("toggleIcon-line2Active");
    toggleLine3.classList.remove("toggleIcon-line3Active");

    trendingPreviewSection.classList.add("inactive");
    verticalListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    getCategoriesPreview();
}
function categoryPage() {
    window.screenTop = 0;

    headerSection.classList.remove("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerTitleCategoryView.classList.remove("inactive");
    headerTitle.classList.add("inactive");
    searchForm.classList.add("inactive");
    asideMenu.classList.add("inactive");
    toggleLine1.classList.remove("toggleIcon-line1Active");
    toggleLine2.classList.remove("toggleIcon-line2Active");
    toggleLine3.classList.remove("toggleIcon-line3Active");

    trendingPreviewSection.classList.add("inactive");
    verticalListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    const [_, categoryData] = location.hash.split("=");
    const [categoryId, categoryName] = categoryData.split("-");
    const categoryTitle = decodeURI(categoryName);

    headerTitleCategoryView.textContent = categoryTitle;

    getCategoriesPreview();
    getMovieByCategory(categoryId);
}