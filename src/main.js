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

// Utilities
function createMovies (array, container) {
    container.innerHTML = "";

    array.forEach(movie => {
        const movieContainer = document.createElement("div");
        const movieContainerPoster = document.createElement("img");

        movieContainer.classList.add("movie-container");
        movieContainer.addEventListener("click", () => {
            location.hash = `movie=${movie.id}`;
        })

        movieContainerPoster.setAttribute("src", `${genericPoster}${movie.poster_path
        }`);
        movieContainerPoster.setAttribute("alt", `${movie.title}`);

        movieContainer.appendChild(movieContainerPoster);
        container.appendChild(movieContainer);
    })
}
function templateSlider (array, container, options = []) {
    container.innerHTML = "";

    container.innerHTML = `
    <label id="selector-${options[0]}" for="item-${options[0]}" class="poster">
        <img src=${genericPoster}${array[0].poster_path} alt=${array[0].title}>
    </label>
    <label id="selector-${options[1]}" for="item-${options[1]}" class="poster">
        <img src=${genericPoster}${array[1].poster_path} alt=${array[1].title}>
    </label>
    <label id="selector-${options[2]}" for="item-${options[2]}" class="poster">
        <img src=${genericPoster}${array[2].poster_path} alt=${array[2].title}>
    </label>
`;
}

// Toggle menú
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

    templateSlider(movies, trendingPreviewMoviesPosters, [1,2,3]);
//     trendingPreviewMoviesPosters.innerHTML = "";

//     trendingPreviewMoviesPosters.innerHTML = `
//     <label id="selector-1" for="item-1" class="poster">
//         <img src=${genericPoster}${movies[0].poster_path} alt=${movies[0].title}>
//     </label>
//     <label id="selector-2" for="item-2" class="poster">
//         <img src=${genericPoster}${movies[1].poster_path} alt=${movies[1].title}>
//     </label>
//     <label id="selector-3" for="item-3" class="poster">
//         <img src=${genericPoster}${movies[2].poster_path} alt=${movies[2].title}>
//     </label>
// `;
}

const getTrendingSeriesPreview = async () => {
    const { data } = await api(`trending/tv/day`);
    const series = data.results;

    templateSlider(series, trendingPreviewSeriesPosters, [4,5,6]);
//     trendingPreviewSeriesPosters.innerHTML = "";

//     trendingPreviewSeriesPosters.innerHTML = `
//     <label id="selector-4" for="item-4" class="poster">
//         <img src=${genericPoster}${series[0].poster_path} alt=${series[0].title}>
//     </label>
//     <label id="selector-5" for="item-5" class="poster">
//         <img src=${genericPoster}${series[1].poster_path} alt=${series[1].title}>
//     </label>
//     <label id="selector-6" for="item-6" class="poster">
//         <img src=${genericPoster}${series[2].poster_path} alt=${series[2].title}>
//     </label>
// `;
}

const getCategoriesPreview = async () => {
    const { data } = await api(`genre/movie/list`);
    const categories = data.genres;

    asideMenuList.innerHTML = "";

    categories.forEach(category => {
        const asideMenuItem = document.createElement("li");
        const asideMenuLink = document.createElement("h4");

        asideMenuItem.classList.add("asideMenu-item");
        asideMenuItem.appendChild(asideMenuLink);
        asideMenuLink.addEventListener("click", () => {
            location.hash = `#category=${category.id}-${category.name}`;
        });
        asideMenuLink.innerText=`${category.name}`;

        asideMenuList.appendChild(asideMenuItem);
    });
}

const getMovieByCategory = async (id) => {
    const { data } = await api(`discover/movie`, {
        params: {
            with_genres: id,
        },
    });
    const movies = data.results;

    // console.log(movies);

    createMovies(movies, verticalListSection);
}

const getMoviesBySearch = async (query) => {
    const { data } = await api(`search/movie`, {
        params: {
            query,
        },
    });
    const movies = data.results;

    // console.log(movies);

    createMovies(movies, verticalListSection);

    searchFormInput.value = "";
}

const getTrendingMovies = async () => {
    const { data } = await api("trending/movie/week");
    const movies = data.results;

    createMovies(movies, verticalListSection);
}

const getTrendingSeries = async () => {
    const { data } = await api("trending/tv/day");
    const series = data.results;

    createMovies(series, verticalListSection);
}

const getMovieById = async (id) => {
    const { data: movie } = await api(`movie/${id}`);

    movieDetailTitle.textContent= movie.title;
    movieDetailScore.textContent= movie.vote_average + "/10 ⭐";
    movieDetailDescription.textContent= movie.overview;

    // <div class="category-container">
    //     <h3 class="category-title">Drama</h3>
    // </div>
    movie.genres.forEach(genre => {
        const categoryContainer = document.createElement("div");
        const categoryTitle = document.createElement("h3");

        categoryTitle.textContent= genre.name;
        categoryContainer.appendChild(categoryTitle);
        movieDetailCategories.appendChild(categoryContainer);
    });

    const movieImgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    headerSection.style.background = `url(${movieImgUrl}) no-repeat center`;
    headerSection.style.backgroundSize = "cover";
}

const getRelatedMoviesById = async (id) => {
    const { data } = await api(`movie/${id}/recommendations`);
    const relatedMovies = data.results;

    createMovies(relatedMovies, movieDetailRelatedList);
}