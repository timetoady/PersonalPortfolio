async function getAPIData(url) {
  try{
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch(error) {
    console.error(error)
  }
}

let mainArea = document.querySelector("main");
let mainHeader = document.querySelector("h1");
let id = getHeroNumber()
const theData = getAPIData(`https://superheroapi.com/api/2714173338605692/${id}`)
.then(data => {
  for ( const heroVillain of data.results){
      getAPIData(heroVillain.url)
      .then(heroData => {
          populateDOM(heroData)
      })
  }
})



function populateDOM(single_hero) {
  let heroDiv = document.createElement("div")
  let name = document.createElement("h3")
  let pic = document.createElement('img')
    //pokeDiv.setAttribute('class', 'charDivs')
  //pic.setAttribute('class', 'images')
  //cardBackStuff(pokeBack, single_pokemon)
  let pokeNum = getPokeNumber(single_hero.id)
  name.textContent = single_hero.name
  pic.src = `..images/${pokeNum}.png`

  pokeDiv.appendChild(name)
  pokeDiv.appendChild(pic)

  mainArea.appendChild(pokeDiv)

}

function getHeroNumber(id) {
  

}

let testDiv = document.createElement("div")
let testTitle = document.createElement("h1")
let pic = document.createElement('img')

testTitle.textContent = "stuff"

mainArea.appendChild(testDiv)
testDiv.appendChild(testTitle)