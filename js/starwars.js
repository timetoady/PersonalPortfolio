import { starships } from "../assets/starships.js";

//To do: 1. filter so only shows starfighters.

// Can be seen in console on page
let mainArea = document.querySelector("main");
let topHeader = document.querySelector("header");
let mainHeader = document.querySelector("h1");

const starFighter = starships.filter(
  starship => starship.starship_class === "starfighter"
);
const otherShips = starships.filter(
  starship => starship.starship_class !== "starfighter"
);
const rebels = starships.filter(
  starship => starship.affiliation === "Rebel Alliance"
);
const empire = starships.filter(
  starship => starship.affiliation === "Galactic Empire"
);
const shipSort = starships.filter(starship =>
  starship.hasOwnProperty("description")
);

const starfightSort = shipSort.filter(
  starship => starship.starship_class === "starfighter"
);

const allDivs = Array.from(mainArea.querySelectorAll("div"));

let starfighterButton = document.createElement("button");
starfighterButton.textContent = "Starfighters";
starfighterButton.hasAttribute("id", "sfButton");
topHeader.appendChild(starfighterButton);

function toggler() {
  starfighterButton.addEventListener("click", () => {
    if (starfighterButton.textContent === "Starfighters") {
      starfighterButton.textContent = "All Ships";
      starfighterButton.innerHTML = "All Ships";
      showShips(starfightSort)
    } else {
      starfighterButton.textContent = "Starfighters";
      showShips(shipSort)
    }
  });
}

var theStarfighters = toggler();

let affiliationButton= document.createElement("button");
affiliationButton.textContent = "Rebels";
topHeader.appendChild(affiliationButton);

function toggler2() {
  affiliationButton.addEventListener("click", () => {
    if (affiliationButton.textContent === "Rebels") {
      affiliationButton.textContent = "Imperials";
      showShips(rebels)
    } else {
      affiliationButton.textContent = "Rebels";
      showShips(empire)
    }
  });
}

var rebsOrEmpire = toggler2();

function showShips(sorter) {
while (mainArea.firstChild) {
  mainArea.removeChild(mainArea.firstChild);
}
sorter.forEach(function(starship) {
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
  mainHeader.setAttribute("class", "topTitle");
  name.textContent = starship.name;
  model.innerText = starship.model;
  pic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`;
  pic.alt = "Starships";
  starshipDesc.textContent = starship.description;
  mainArea.appendChild(starshipDiv);
});
}

function getShipNumber(shipURL) {
  let end = shipURL.lastIndexOf("/");
  let shipID = shipURL.substring(end - 2, end);
  if (shipID.indexOf("/") !== -1) {
    return shipID.slice(1, 2);
  } else {
    return shipID;
  }
}
