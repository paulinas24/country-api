let btn = document.getElementById("buttonFind");


btn.addEventListener("click", () => {

  let input = document.querySelector('.cityInp').value;
  let url = `https://restcountries.com/v3.1/capital/${input}`;

  fetch(url).then((Response) => Response.json()).then((data) => {
   

    result.innerHTML = `

  
    <div class="responseWrap">
    <div class="flagWrap">
        <img src="${data[0].flags.svg}" height="80px" width="150px">
    </div>
   
    <div class="countryWrap row">
    <h2 class="countryName col"> Country Name:</h2>
    <h2 class="countryName col"> ${data[0].name.common}</h2>
    </div>

    <div class="currencyWrap row">
        <h3 class="countryCurrency col"> Currency: </h3>
        <h3 class="countryCurrency col "> ${data[0].currencies[Object.keys(data[0].currencies)].name}, ${data[0].currencies[Object.keys(data[0].currencies)].symbol} </h3>
    </div>
  
    <div class="continentWrap row">
        <h4 class="countryContinent col"> Continent: </h4>
        <h4 class="countryContinent col"> ${data[0].continents[0]} </h4>
    </div>
    </div>`;

  })




  console.log(input, url)
})

btn.addEventListener("keydown", function (e) {
  if (e.code === "Enter") { 
      
   

  }

});