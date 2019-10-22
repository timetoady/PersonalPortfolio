import { starships } from "./assets/starships.js"

const starfighters = starships.filter(starship => starship.starship_class === "Starfighter", "assault starfighter")

// let starfighterShowcase = document.querySelector("main");
// let sectionHeader = document.querySelector("h1");
// let starfighterList = document.createElement("section")
// starfighterShowcase.document.appendChild(starfighterList)
// let mySubheader = document.createElement('h2');
// mySubheader.textContent = "Starfighters are the best"
// document.starfighterList.appendChild(mySubheader);
// console.log(starships[4].starship_class)

function createAndAppendSection() {
    let div = document.querySelector('main');
    let starfighterShowcase = document.createElement('section');
    div.appendChild(starfighterShowcase);
    let subHeader = document.querySelector("h2");
    let mySubheader = document.createElement('h2');
    mySubheader.textContent = "Starfighters are the best";
    starfighterShowcase.appendChild(mySubheader);
}

console.log("Does this work?")
console.log(starships[4].starship_class)