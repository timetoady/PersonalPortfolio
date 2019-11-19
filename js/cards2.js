///use map on this to isolate just the ones I like

var request = new XMLHttpRequest();

let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");

request.open(
  "GET",
  "https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json"
);

request.onreadystatechange = function() {
  var data = JSON.parse(this.response);
  if (this.readyState === 4) {
    console.log("Status:", this.status);
    
    //console.log(this.responseText);
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
      theScene.setAttribute("class", "scene");
      theCard.setAttribute("class", "card");
      theCardFront.setAttribute("class", "card__face card__face--front");
      theCardBack.setAttribute("class", "card__face card__face--back");

      mainArea.appendChild(theScene);
      theScene.appendChild(theCard);
      theCard.appendChild(theCardFront);
      theCard.appendChild(theCardBack);
      theCardFront.appendChild(pic);
      theCardBack.appendChild(name);
      theCardBack.appendChild(heading);
      theCardBack.appendChild(stats);
      //Content
      name.textContent = id.name;
      pic.src = id.images.md;
      heading.textContent = "Stats";
      stats.innerText = getStats;

      //Click to flip
      
    });
    
  }
  let card = document.querySelector(".card");
  card.addEventListener("click", function() {
  card.classList.toggle("is-flipped");
  });

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

