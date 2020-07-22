const body = document.querySelector("body");

fetch("https://pokeapi.co/api/v2/pokemon/flareon")
.then(response => {
    return response.json();
})
.then(data => {
    //console.log(data);
    let picture = data.sprites;
    //console.log(picture);
    let flareonPicture = picture.front_default;
    //console.log(flareonPicture);
    let pokeName = data.name;
    //console.log(pokeName);
    let pokeHeight = data.height;
    //console.log(pokeHeight);
    let pokeWeight = data.weight;
    //console.log(pokeWeight);
    let fireBlast = data.moves[24].move.name;
    //console.log(fireBlast);
    let types = data.types[0].type.name;
    //console.log(types);

    const card = document.createElement("div");
    card.classList.add("card"); //add a class called card
    card.style.width = "18rem"; //adding width to card
    //console.log(card);

    const image = document.createElement("img");
    image.src= flareonPicture;
    image.classList.add("card-img-top");
    image.alt = pokeName;
    //console.log(image);
    
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    console.log(cardBody);
    
    let firstLetter = pokeName.charAt(0).toUpperCase();
    //console.log(firstLetter);
    let otherLetters = pokeName.slice(1);
    //console.log(otherLetters);
    let finalName = firstLetter+otherLetters;
    
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");

    cardTitle.textContent = finalName;
    console.log(cardTitle);

    const cardWeight = document.createElement("p");
    const cardHeight = document.createElement("p");
    const cardMove = document.createElement("p");
    const cardType = document.createElement("p");

    cardWeight.classList.add("card-text");
    cardHeight.classList.add("card-text");
    cardMove.classList.add("card-text");
    cardType.classList.add("card-text");

    cardWeight.textContent = "Weight: " +pokeWeight;
    cardHeight.textContent = "Height: " +pokeHeight;
    cardMove.textContent = "Move: " +fireBlast;
    cardType.textContent = "Type: " +types;

    // console.log(cardWeight);
    // console.log(cardHeight);
    // console.log(cardMove);
    // console.log(cardType);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardWeight);
    cardBody.appendChild(cardHeight);
    cardBody.appendChild(cardMove);
    cardBody.appendChild(cardType);

    card.appendChild(image);
    card.appendChild(cardBody);
    console.log(card);

    body.appendChild(card);


    

})

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

