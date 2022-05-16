setTimeout(function(){
    console.log('async')
    // waits for one second then runs the code
}, 1000)

// runs the code within sync
console.log('synchronous')



// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {

  // async keyword is await because the fetch might takea while. 
  const response = await fetch(url);
  //check to see if the fetch was successful with .ok
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
}
getPokemon(url);
console.log("second: ", results);