// Eventlistener på knappen
const btn = document.querySelector('button');
btn.addEventListener('click', clickEvent);


// Så formuläret inte skickas som default
function clickEvent(e){
    e.preventDefault();
 
 //Tar bort eventuellt error meddelande
document.querySelector('h4').innerText = ''; 
 


//Hämta det som skrevs in i inputen och skapa url
const input = document.querySelector('input');

let searchText = input.value;

//URL: Country name API
const urlName = `https://restcountries.com/v3.1/name/${searchText}`;


//Hämta country
getCountryName(urlName);
input.value = ''; // Så att text inputen blir tom
}


function getCountryName(url){
fetch(url).then(
    res => res.json()
).then(
    data => displayCountryName(data[0]) //Om data hämtats anropas displayCountryName
).catch( displayError ); //Annars andropas displayError
}



function displayCountryName(country){
//Country är objektet
console.log(country);

//Official Name
document.querySelector('#official-name').innerText = country.name.official;

//Subregion
document.querySelector('#subregion').innerText = country.subregion;

//Capital
document.querySelector('#capital').innerText = country.capital;

//Population
document.querySelector('#population').innerText = country.population;

//Flags img
document.querySelector('#country img').src = `${country.flags.png}`;

}




//Om ett error uppstår kommer visas ett errormeddelande
function displayError(e){
document.querySelector('h4').innerText = 'Kunde inte hittas';
}

