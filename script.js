let API_KEY = 'api_key=b68f16b8ae045debc688654c4e72735b';
let BASE_URL = 'https://api.themoviedb.org/3';
let API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
let IMG_URL ='https://image.tmdb.org/t/p/w500';
let searchURL = BASE_URL + '/search/movie?'+API_KEY;


let search = document.getElementById('search')

getMovie(API_URL);

function getMovie(url){

    fetch(url).then(result => result.json()).then(data => {
        // console.log(data);
        showMovie(data.results);   
    })

}
function getSearch(request){
    let url = `${BASE_URL}/search/movie?${API_KEY}&query=${request}`
    fetch(url).then(result => result.json()).then(data => {
        // console.log(data);
        showMovie(data.results);   
    })
}

function showMovie(data){
    let main = '';
    // main.innerHTML = '';

    
    data.forEach(movie => {
        // console.log(movie);
        let {title, poster_path, vote_average} = movie
        main += `
        <div class ="col mb-3">
            <div class="card" style="width: 18rem;">
                <img src="${IMG_URL+poster_path}" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${vote_average}</p>
                </div>
            </div>
        </div>`
            document.getElementById('list-movie').innerHTML= main
    });
}


search.addEventListener('change', (e) => {
    if (e.target.value == "") {
        getMovie(API_URL);
    } else {
        getSearch(e.target.value)
    }
//     e.target.value == "" ? getMovie(url) : getSearch(e.target.value) 
})
