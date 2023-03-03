window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
    console.log({location});

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
    console.log("home");

    getTrendingMoviesPreview();
    getTrendingSeriesPreview();
    getCategoriesPreview();
}
function searchPage() {
    console.log("Buscando!");
}
function movieDetailsPage() {
    console.log("Movie detail");
}
function trendsPage() {
    console.log("Estas en la pagina de tendencias!");
}
function categoryPage() {
    console.log("category view");
}