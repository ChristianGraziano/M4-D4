//? PROMISE PER CHIAMATA AJAX

const ApiUrl = "https://striveschool-api.herokuapp.com/books"

const getBook = () => {
    fetch (ApiUrl)
    .then((result) => {
        return result.json()
    })
    .then((json) => {
        console.log(json.title);
    })
    .catch((error) => { console.log(error);})
}