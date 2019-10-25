import { starships } from "../assets/starships.js";

//To do: 1. filter so only shows starfighters. 2. Show other stats when hover over individual image.
//Use otherstats.appendChild() and hover function.

// Can be seen in console on page
let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");

starships.forEach(function(starship) {
  let starshipDiv = document.createElement("div");
  let name = document.createElement("h1");
  let model = document.createElement("p");
  let pic = document.createElement("img");
  let starshipDesc = document.createElement("ul");
  starshipDesc.setAttribute("class", "starshipDesc");
  starshipDesc.setAttribute("style", "blue");
  starshipDiv.setAttribute("class", "starshipDiv");
  starshipDiv.appendChild(name);
  starshipDiv.appendChild(model);
  starshipDiv.appendChild(pic);
  starshipDiv.appendChild(starshipDesc);
  let shipNum = getShipNumber(starship.url);
  mainHeader.textContent = "Starships";
  name.textContent = starship.name;
  model.innerText = starship.model;
  pic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`;
  pic.alt = "Starships";
  pic.onerror ="this.onerror=null;this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'";
  starshipDesc.textContent = starship.description;

  mainArea.appendChild(starshipDiv);
});

function getShipNumber(shipURL) {
  let end = shipURL.lastIndexOf("/");
  let shipID = shipURL.substring(end - 2, end);
  if (shipID.indexOf("/") !== -1) {
    return shipID.slice(1, 2);
  } else {
    return shipID;
  }
}

const starFighter = starships.filter(
  starship => starship.starship_class === "starfighter"
);
const shipSort = starships.filter(
  starship => starship.description === length > 6
);



// const femaleCharacters = people.filter(person => person.gender ==="female")
// console.log(femaleCharacters)
