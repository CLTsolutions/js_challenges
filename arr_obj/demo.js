
const url = 'https://ghibliapi.herokuapp.com/films'
fetch(url)
    .then( res => res.json())
    .then(json => json.map(film => film.title))
    .then(filmTitles => console.log(filmTitles))
