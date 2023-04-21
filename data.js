const URL = "https://restcountries.com/v3.1/all";

const data = async () => {
 
    let fiveCountries = [];
 const api = fetch(URL)
    .then(response => response.json())
    .then( countries => {
       for(let i = 0; i < 5; i++){

        fiveCountries.push(countries[i]);
       }
    })

return fiveCountries;
}

export default{
    data
}