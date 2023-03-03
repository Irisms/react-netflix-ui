const key = '9ff4f64dda69446a5c85a29b1d9cec22'

const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    // requestHorror = `https://api.themoviedb.org/3/movie/movie?api_key=${key}&language=en-US&query=horror&page=1&include_adult`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
}

export default requests 