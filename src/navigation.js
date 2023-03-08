searchFormBtn.addEventListener("click", () => {
    location.hash = `search=${searchFormInput.value}`;
});

headerArrow.addEventListener("click", () => {
    // location.hash = "home";
    // window.history.back();
    const stateLoad = window.history.state ? window.history.state.loadUrl : '';
    if (stateLoad.includes('#')) {
        window.location.hash = '';
    } else {
        window.history.back();
    }
});

trendingPreviewButton[0].addEventListener("click", () => {
    location.hash = "trendingMovies";
})
trendingPreviewButton[1].addEventListener("click", () => {
    location.hash = "trendingSeries";
})

window.addEventListener("DOMContentLoaded", () => {
    navigator();
    window.history.pushState({loadUrl: window.location.href},null,"");
}, false);
window.addEventListener("hashchange", navigator, false);

function navigator() {
    if (location.hash.startsWith("#trendingMovies")) {
        trendingMoviesPage();
    } else if (location.hash.startsWith("#search=")) {
        searchPage();
    } else if (location.hash.startsWith("#movie=")) {
        movieDetailsPage();
    } else if (location.hash.startsWith("#category=")) {
        categoryPage();
    } else if (location.hash.startsWith("#trendingSeries")){
        trendingSeriesPage();
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

    const [_, inputValue] = location.hash.split("=");
    const query = decodeURI(inputValue);
    headerTitleCategoryView.innerHTML= query.toUpperCase();

    getMoviesBySearch(query);

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

    const [_ , movieId] = location.hash.split("=");

    getMovieById(movieId);
    getRelatedMoviesById(movieId);
    getCategoriesPreview();
}
function trendingMoviesPage() {
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

    headerTitleCategoryView.innerHTML= "Trending movies";

    getTrendingMovies();
    getCategoriesPreview();
}
function trendingSeriesPage() {
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

    headerTitleCategoryView.innerHTML= "Trending series";

    getTrendingSeries();
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