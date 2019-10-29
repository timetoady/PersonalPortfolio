import { films } from "../assets/films.js";

//To do: 1. filter so only shows starfighters. 2. Show other stats when hover over individual image.
//Use otherstats.appendChild() and hover function.

// Can be seen in console on page
let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");



films.forEach(function(film) {
  let filmsDiv = document.createElement("div");
  let flipCard = document.createElement("div")
  let flipCardInner = document.createElement("div")
  let flipCardFront = document.createElement("div")
  let flipCardBack = document.createElement("div")
  let title = document.createElement("h1");
  let episodeID = document.createElement("p");
  let pic = document.createElement("img");
  let crawl = document.createElement('h2')
  flipCard.appendChild(flipCardInner)
  flipCardInner.appendChild(flipCardFront)
  flipCardInner.appendChild(flipCardBack)
  filmsDiv.appendChild(title);
  filmsDiv.appendChild(episodeID);
  filmsDiv.appendChild(flipCard)
  flipCardFront.appendChild(pic)
  flipCardFront.setAttribute('class', 'flip-card-front')
  flipCard.setAttribute('class', 'flip-card')
  flipCardBack.setAttribute('class', 'flip_card_back')
  flipCardBack.appendChild(crawl)
  flipCardInner.setAttribute('class', 'flip-card-inner')
  
  pic.setAttribute('class', 'img')
  filmsDiv.setAttribute("class", "content");
  let filmNum = getFilmNumber(film.url);
  title.textContent = film.title;
  episodeID.innerText = film.episode_id;
  crawl.innerText = film.opening_crawl
  flipCardBack.setAttribute('style', 'color: yellow')
  pic.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`;
  pic.alt = "Films";
  mainArea.appendChild(filmsDiv);
});

function getFilmNumber(filmURL) {
  let end = filmURL.lastIndexOf("/");
  let filmID = filmURL.substring(end - 2, end);
  if (filmID.indexOf("/") !== -1) {
    return filmID.slice(1, 2);
  } else {
    return filmID;
  }
}

console.log("Hey yoooo!")

