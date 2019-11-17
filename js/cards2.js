//https://api.jikan.moe/v3/anime/{id}/{request}/{parameter}

var request = new XMLHttpRequest();

request.open('GET', 'https://api.jikan.moe/v3/anime/5114');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
console.log(request)

let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");

let testDiv = document.createElement("div")
let testTitle = document.createElement("h1")
let pic = document.createElement('img')

testTitle.textContent = "stuff"

mainArea.appendChild(testDiv)
testDiv.appendChild(testTitle)