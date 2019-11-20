///use map on this to isolate just the ones I like

class Hero {
  constructor(id, name, stats) {
    this.id = id;
    this.name = name;
    this.powerstats = stats;
  }
}

const Hyperman = new Hero(732, "Hyperman", 130);

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

    //console.log(this.responseText);

    //console.log(Object.keys(data))

    data.forEach(id => {
      //Card setup
      let theScene = document.createElement("div");
      let theCard = document.createElement("div");
      let theCardFront = document.createElement("div");
      let theCardBack = document.createElement("div");
      let name = document.createElement("h2");
      let heading = document.createElement("h3");
      let stats = document.createElement("p");
      let getStats = jsonFilter(id.powerstats);
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
      figdiv.appendChild(imgfig);
      imgfig.appendChild(name);
      theCardBack.appendChild(heading);
      theCardBack.appendChild(stats);
      //Content
      name.textContent = id.name;
      pic.src = id.images.md;
      heading.textContent = "Stats";
      stats.innerText = getStats;
    });
  }
  // document.querySelector("#addHero").addEventListener("click", () => {
  //   let addHero = prompt("Name your Hero or Villain: ");

  //   populateDOM(addHero);
  // });
};

request.send();

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

//call dome to make customer hero
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
  figdiv.appendChild(imgfig);
  imgfig.appendChild(name);
  theCardBack.appendChild(heading);
  theCardBack.appendChild(heroStats);
  //Content
  name.textContent = heroName;
  pic.src = heroPic;
  heading.textContent = "Stats";
  //stats.innerText = heroStats;
}

document.querySelector("#addHero").addEventListener("click", () => {
  let heroName = prompt(
    "Provide the name of the hero or villain you want to add: "
  );
  let heroPic = prompt("Give a url for your hero image: ");
  let rawStats = prompt(
    "Give your hero the following stats, seperated by commas, 1-100: INT,STR,SPD,DUR,POW,COM"
  );
  let joinedStats = rawStats.split(",");
  console.log(joinedStats);
  let heroStats = document.createElement("p");
  heroStats.setAttribute('class', 'customStats')
  heroStats.innerText = `Intelligence: ${joinedStats[0]}\n
                          Strength: ${joinedStats[1]}\n
                          Speed: ${joinedStats[2]}\n
                          Durabilty: ${joinedStats[3]}\n
                          Power: ${joinedStats[4]}\n
                          Combat: ${joinedStats[5]}\n`;
  populateDOM(heroName, heroPic, heroStats);
});

function getKeyByValue(object, value) {
  for (var prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (object[prop] === value) return prop;
    }
  }
}
