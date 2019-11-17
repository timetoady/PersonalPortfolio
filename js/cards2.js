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

  const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
  .then(data => {
    for ( const pokemon of data.results){
        getAPIData(pokemon.url)
        .then(pokedata => {
            populateDOM(pokedata)
        })
    }
  })