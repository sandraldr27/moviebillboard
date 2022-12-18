const requestURL = '../movies/json/movies.json';

async function fetchMoviesJson() {
    const response = await fetch (requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {

  for (let index = 0; index<movies.peliculas.length; index++)

    {
      const psychologicalMoviesSection = document.getElementById ("psychologicalMoviesSection");

      let idMovie = movies.peliculas[index].id;
      let titleMovie = movies.peliculas[index].titulo;
      let directorMovie = movies.peliculas[index].director;
      let genreMovie = movies.peliculas[index].genero;
      let imageMovie = movies.peliculas[index].caratula;
      let synopsisMovie= movies.peliculas[index].sinopsis;

      psychologicalMoviesSection.innerHTML += `
        <div class="card">
          <img src="${imageMovie}" class="imageCard" alt="Image of movie">
            <div class="card-body"> 
              <p class="movieTitle">${idMovie}. ${titleMovie}</p>
              <p><b class="genreTitle">Género:</b> ${genreMovie}</p>
              <p><b class="directorTitle">Director:</b> ${directorMovie}</p>
                <div id="scrollSynopsis">
                  <p class="synopsisTitle">Sinopsis:<p class="synopsisMovie">${synopsisMovie}</p>
                </div>
            </div>
        </div>

`
  }; 

})