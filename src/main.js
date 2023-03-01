// AXIOS
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    params: {
        "api_key": API_KEY,
    }
});

// Toggle menú
const headerToggle = document.querySelector(".header-toggleIcon");
const toggleLine1 = document.querySelector(".toggleIcon-line1");
const toggleLine2 = document.querySelector(".toggleIcon-line2");
const toggleLine3 = document.querySelector(".toggleIcon-line3");
const asideMenu = document.querySelector("#asideMenu");

headerToggle.addEventListener("click", () => {
    toggleLine1.classList.toggle("toggleIcon-line1Active");
    toggleLine2.classList.toggle("toggleIcon-line2Active");
    toggleLine3.classList.toggle("toggleIcon-line3Active");
    asideMenu.classList.toggle("inactive");
});

const API_URL = "https://api.themoviedb.org/3/";
const genericPoster = "https://image.tmdb.org/t/p/w300";

// Trending
const getTrendingMoviesPreview = async () => {
    const { data } = await api(`trending/movie/week`);
    const movies = data.results;

    const trendingPreviewPosters = document.querySelector("#trendingMovies");
    trendingPreviewPosters.innerHTML = `
    <label id="selector-1" for="item-1" class="poster">
        <img src=${genericPoster}${movies[0].poster_path} alt=${movies[0].title}>
    </label>
    <label id="selector-2" for="item-2" class="poster">
        <img src=${genericPoster}${movies[1].poster_path} alt=${movies[1].title}>
    </label>
    <label id="selector-3" for="item-3" class="poster">
        <img src=${genericPoster}${movies[2].poster_path} alt=${movies[2].title}>
    </label>
`;
}

const getTrendingSeriesPreview = async () => {
    const { data } = await api(`trending/tv/day`);
    const series = data.results;

    const trendingPreviewPosters = document.querySelector("#trendingSeries");
    trendingPreviewPosters.innerHTML = `
    <label id="selector-4" for="item-4" class="poster">
        <img src=${genericPoster}${series[0].poster_path} alt=${series[0].title}>
    </label>
    <label id="selector-5" for="item-5" class="poster">
        <img src=${genericPoster}${series[1].poster_path} alt=${series[1].title}>
    </label>
    <label id="selector-6" for="item-6" class="poster">
        <img src=${genericPoster}${series[2].poster_path} alt=${series[2].title}>
    </label>
`;
}

const getCategoriesPreview = async () => {
    const { data } = await api(`genre/movie/list`);
    const categories = data.genres;

    categories.forEach(category => {
        const asideMenu = document.querySelector("#asideMenu .asideMenu-list");

                // <li class="asideMenu-item"><a href="#">Action</a></li>
                // <li class="asideMenu-item"><a href="#">Adventure</a></li>
                // <li class="asideMenu-item"><a href="#">Comedy</a></li>
                // <li class="asideMenu-item"><a href="#">Romance</a></li>
                // <li class="asideMenu-item"><a href="#">Musical</a></li>
                // <li class="asideMenu-item"><a href="#">Drama</a></li>
        const asideMenuItem = document.createElement("li");
        const asideMenuLink = document.createElement("a");

        asideMenuItem.classList.add("asideMenu-item");
        asideMenuItem.appendChild(asideMenuLink);
        asideMenuLink.setAttribute("href", "#");
        asideMenuLink.innerText=`${category.name}`;

        asideMenu.appendChild(asideMenuItem);
    });


}

getTrendingMoviesPreview();
getTrendingSeriesPreview();
getCategoriesPreview();