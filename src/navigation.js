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

    location.hash
}

function homePage() {
    headerSection.classList.remove("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.add("inactive");
    headerTitleCategoryView.classList.add("inactive");
    headerTitle.classList.remove("inactive");
    searchForm.classList.remove("inactive");

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

    trendingPreviewSection.classList.add("inactive");
    verticalListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    getCategoriesPreview();
}
function categoryPage() {
    headerSection.classList.remove("header-container--img");
    headerSection.style.background = "";
    headerArrow.classList.remove("inactive");
    headerTitleCategoryView.classList.remove("inactive");
    headerTitle.classList.add("inactive");
    searchForm.classList.add("inactive");

    trendingPreviewSection.classList.add("inactive");
    verticalListSection.classList.remove("inactive");
    movieDetailSection.classList.add("inactive");

    getCategoriesPreview();
}