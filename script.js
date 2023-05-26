//? PROMISE PER CHIAMATA AJAX

const ApiUrl = "https://striveschool-api.herokuapp.com/books"

let divCard = document.getElementById('board');

function getBook () {
    fetch (ApiUrl,)
    .then((response) => {
        return response.json()
    })
    .then((json) => {
    console.log(json);
    
         for (let i = 0; i < json.length; i++) {
             let bookTitle = json[i].title;
             let bookImg = json[i].img;
             let bookPrice = json[i].price;

             let newDiv= document.createElement("div");
             newDiv.classList.add("col-12", "col-sm-6", "col-md-4","col-lg-3", "col-xl-2","d-flex", "justify-content-center")
             newDiv.innerHTML=
             `<div class="card" style="width: 18rem;">
             <img src="${bookImg}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${bookTitle}</h5>
                 <p class="card-text">€ ${bookPrice}</p>
                 <button onclick="addCart()" type="button" class="btn btn-primary">Add to cart</button>
             </div>
             </div>;`
            divCard.appendChild(newDiv);
    
     }
     })
    .catch((error) => { console.log(error);})
}

getBook();