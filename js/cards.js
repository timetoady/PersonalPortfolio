//Adding a class to cookie cutter objects in

// class Hero {
//   constructor(id, name, stats) {
//     this.id = id;
//     this.name = name;
//     this.powerstats = stats;
//   }}

// const Hyperman = new Hero(999, 'Ademna', 130);

// console.log(square.area); // 100

async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");

const theData = getAPIData("https://pokeapi.co/api/v2/pokemon/").then(data => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then(pokedata => {
      populateDOM(pokedata);
    });
  }
});

function populateDOM(single_pokemon) {
  let pokeDiv = document.createElement("div");
  let name = document.createElement("h3");
  let pic = document.createElement("img");

  //pokeDiv.setAttribute('class', 'charDivs')
  //pic.setAttribute('class', 'images')
  //cardBackStuff(pokeBack, single_pokemon)
  let pokeNum = getPokeNumber(single_pokemon.id);
  name.textContent = single_pokemon.name;
  pic.src = `..images/${pokeNum}.png`;

  pokeDiv.appendChild(name);
  pokeDiv.appendChild(pic);

  mainArea.appendChild(pokeDiv);
}

function getPokeNumber(id) {
  if (id < 10) return `00${id}`;
  if (id > 9 && id < 100) {
    return `0${id}`;
  } else return id;
}

// function cardBackStuff(pokeback){
//   let pokeOrder = document.createElement('p').textContent = pokeBack.pokeOrder
//   pokeBack.appendChild(pokeOrder)
// }
