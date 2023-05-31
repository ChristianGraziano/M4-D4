

const endPoint = "https://striveschool-api.herokuapp.com/books"

// ELEMENTI DEL DOM
let bookContainer = document.getElementById('book-container');
let searchField = document.getElementById('search-field');


// CHIAMATA API
fetch(endPoint)
.then((res) => res.json())
.then((book) => {cicleResponse(book)}) 
.catch((err) => {console.log(err)})

// FUNZIONE CHE CICLA IL JSON
function cicleResponse(json) {
    bookContainer.innerHTML ="";
    json.forEach((book) => {
      createTemplete(book);  
    });
}





// FUNZIONE CREAZIONE ELEMENTI CARD
function createTemplete(book) {
    let cardBook = document.createElement('div');
    cardBook.classList.add("col-12","col-md-4", "col-lg-3","card", "p-0","mb-3", "flex-column" ,"justify-content-between")
    let bookImg = document.createElement('img');
    bookImg.src = book.img;
    bookImg.classList.add();

    let bookTitle = document.createElement('h5');
    bookTitle.innerText = book.title;
    
    
    let bookPrice = document.createElement('p');
    bookPrice.innerText = book.price + " " + "$";
    bookPrice.classList.add("text-center", "fw-bold")
    
    let bookButtonCart = document.createElement('button');
    bookButtonCart.classList.add("btn", "btn-info", "mx-3");
    bookButtonCart.innerText =("Add To Cart");
    
    let bookButtonDetail = document.createElement('button');
    bookButtonDetail.classList.add("btn", "btn-success", "mx-5", "my-2")
    bookButtonDetail.innerText =("Details");

    cardBook.appendChild(bookImg);
    cardBook.appendChild(bookTitle);
    cardBook.appendChild(bookPrice);
    cardBook.appendChild(bookButtonCart);
    cardBook.appendChild(bookButtonDetail);

    bookContainer.appendChild(cardBook);

}

function research() {
    let searchFieldValue = searchField.ariaValueMax;
    console.log(searchField);
}