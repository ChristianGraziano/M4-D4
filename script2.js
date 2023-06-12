

const endPoint = "https://striveschool-api.herokuapp.com/books"

// ELEMENTI DEL DOM
let bookContainer = document.getElementById('book-container');
let searchField = document.getElementById('search-field');
let searchButton = document.getElementById('button-search');
let alertFail = document.getElementById("alert-fail-search");
let contentCart = document.getElementById("modal-body");


 window.onload = getBook(); 

// CHIAMATA API
  
  function getBook() {
  fetch(endPoint)
  .then((res) => res.json())
  .then((book) => {cicleResponse(book)}) 
  .catch((err) => {console.log(err)})
  }


  // FUNZIONE CHE CICLA IL JSON
  function cicleResponse(json) {
      bookContainer.innerHTML ="";
      json.forEach((book) => {
        createTemplete(book);  
      });
  }

searchButton.addEventListener("click", makeSearch);

// FUNZIONE DI RICERCA 
async function makeSearch() {
    let searchFieldValue = searchField.value.toLowerCase();
     if (searchFieldValue.length >= 3) {
        bookContainer.innerHTML=""; 
        let promise = await fetch(endPoint);
        let response = await promise.json();
     
     response.forEach((element) => {
        let titleBook = element.title.toLowerCase();
        if(titleBook.includes(searchFieldValue)) {
            createTemplete(element);
        }
        else {
            alertFail.classList.remove("d-none");
            setTimeout(() => {
                alertFail.classList.add("d-none");
            }, 5000);
        }
     })
     }
     else {
        alert("Inserisci almeno 3 caratteri!")
     }
     
}

//! FUNZONE PER AGGIUNGERE AL CARRELLO 

let buttonCart = document.getElementsByClassName('button-cart');


async function addToCart() {
        let promise = await fetch(endPoint);
        let response = await promise.json();
        response.forEach((cartBook) => {
            
            let cartItem = document.createElement('li');

            // let titleItem = document.createElement('span');
            cartItem.innerText = cartBook.title;

            // cartItem.appendChild(titleItem);
            contentCart.appendChild(cartItem);
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
    bookButtonCart.classList.add("btn", "btn-info", "mx-3", "button-cart");
    bookButtonCart.innerText =("Add To Cart");
    
    let bookButtonDetail = document.createElement('a');
    bookButtonDetail.classList.add("btn", "btn-success", "mx-5", "my-2")
    bookButtonDetail.innerText =("Details");

    cardBook.appendChild(bookImg);
    cardBook.appendChild(bookTitle);
    cardBook.appendChild(bookPrice);
    cardBook.appendChild(bookButtonCart);
    cardBook.appendChild(bookButtonDetail);

    bookContainer.appendChild(cardBook);

}



        

    
    
    
