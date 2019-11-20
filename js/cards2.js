
var request = new XMLHttpRequest();

let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");

request.open(
  "GET",
  "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
);
//onreadystatechange
request.onload = function() {
  var data = JSON.parse(this.response);
  if (this.readyState === 4) {
    console.log("Status:", this.status);
    //filter for favorite heroes and villains
    const favs = data.filter(
      id =>
        id.name === "Wolverine" ||
        id.name === "Goku" ||
        id.name === "Superman" ||
        id.name === "Yoda" ||
        id.name === "One Punch Man" ||
        id.slug === "70-batman"||
        id.name === "Thanos" ||
        id.slug === "149-captain-america" ||
        id.name === "Bane" ||
        id.slug === "98-black-canary" ||
        id.name === "Black Lightning" ||
        id.name === "Darth Vader" ||
        id.name === "Data" ||
        id.name === "Deadpool" ||
        id.name === "Deathstroke" ||
        id.name === "Spider-Man" ||
        id.name === "Carnage" ||
        id.name === "Venom" ||
        id.name === "Chuck Norris" ||
        id.name === "Joker" ||
        id.name === "Cyclops" ||
        id.name === "Daredevil" ||
        id.name === "Doctor Doom" ||
        id.name === "Leonardo" ||
        id.name === "Lex Luthor"

    );

    favs.forEach(id => {
      //Card setup
      let theScene = document.createElement("div");
      let theCard = document.createElement("div");
      let theCardFront = document.createElement("div");
      let cardFrontText = document.createElement("div");
      let theCardBack = document.createElement("div");
      let name = document.createElement("h2");
      let heading = document.createElement("h3");
      let stats = document.createElement("p");
      let getStats = jsonFilter(id.powerstats);
      let pic = document.createElement("img");
      pic.setAttribute("class", "front_image");
      theScene.setAttribute("class", "scene");
      theCard.setAttribute("class", "card");
      theCardFront.setAttribute("class", "card__face card__face--front");
      cardFrontText.setAttribute("class", "card__face card__face--front");
      theCardBack.setAttribute("class", "card__face card__face--back");
      theCard.addEventListener("click", function() {
        theCard.classList.toggle("is-flipped");
      });
      mainArea.appendChild(theScene);
      theScene.appendChild(theCard);
      theCard.appendChild(theCardFront);
      theCard.appendChild(theCardBack);
      theCardFront.appendChild(pic);
      theCardFront.appendChild(cardFrontText);
      theCardBack.appendChild(name);
      theCardBack.appendChild(heading);
      theCardBack.appendChild(stats);
      //Content
      name.textContent = id.name;
      pic.src = id.images.md;
      heading.textContent = "Stats";
      stats.innerText = getStats;
    });
  }
};

request.send();
//JSON filter to make Powerstats appear nicely
function jsonFilter(json) {
  return JSON.stringify(json)
    .replace(new RegExp('"', "g"), "")
    .replace(new RegExp("}", "g"), "")
    .replace(new RegExp("{", "g"), "")
    .replace(new RegExp("intelligence", "g"), "Intelligence")
    .replace(new RegExp("strength", "g"), "Strength")
    .replace(new RegExp("speed", "g"), "Speed")
    .replace(new RegExp("durability", "g"), "Durability")
    .replace(new RegExp("power", "g"), "Power")
    .replace(new RegExp("combat", "g"), "Combat")
    .replace(new RegExp(",", "g"), "\n");
}

//call dom to make customer hero
function populateDOM(heroName, heroPic, heroStats) {
  let theScene = document.createElement("div");
  let theCard = document.createElement("div");
  let theCardFront = document.createElement("div");
  let theCardBack = document.createElement("div");
  let name = document.createElement("h2");
  let heading = document.createElement("h3");
  let stats = document.createElement("p");
  let pic = document.createElement("img");
  let figdiv = document.createElement("figure");
  let imgfig = document.createElement("figcaption");
  theScene.setAttribute("class", "scene");
  theCard.setAttribute("class", "card");
  theCardFront.setAttribute("class", "card__face card__face--front");
  theCardBack.setAttribute("class", "card__face card__face--back");
  theCard.addEventListener("click", function() {
    theCard.classList.toggle("is-flipped");
  });
  mainArea.appendChild(theScene);
  theScene.appendChild(theCard);
  theCard.appendChild(theCardFront);
  theCard.appendChild(theCardBack);
  theCardFront.appendChild(pic);
  theCardBack.appendChild(name);
  theCardBack.appendChild(heading);
  theCardBack.appendChild(heroStats);
  //Content
  name.textContent = heroName;
  pic.src = heroPic;
  heading.textContent = "Stats";
  //stats.innerText = heroStats;
}

//button info to make custome hero
document.querySelector("#addHero").addEventListener("click", () => {
  let heroName = prompt(
    "Provide the name of the hero or villain you want to add: "
  );
  let heroPic = prompt("Give a url for your image (320x480 works best): ");
  let rawStats = prompt(
    "Give your hero the following stats, seperated by commas, 1-100: INT,STR,SPD,DUR,POW,COM"
  );
  let joinedStats = rawStats.split(",");

  let heroStats = document.createElement("p");
  heroStats.setAttribute("class", "customStats");
  heroStats.innerText = `Intelligence: ${joinedStats[0]}\n
                          Strength: ${joinedStats[1]}\n
                          Speed: ${joinedStats[2]}\n
                          Durabilty: ${joinedStats[3]}\n
                          Power: ${joinedStats[4]}\n
                          Combat: ${joinedStats[5]}\n`;
  populateDOM(heroName, heroPic, heroStats);
});
