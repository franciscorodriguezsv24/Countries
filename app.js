const URL = "https://restcountries.com/v3.1/all";

const keyValue = (arr) => {
arr.key
}

 fetch(URL)
    .then(response => response.json())
    .then( countries => {
       for(let i = 0; i < 5; i++){
        console.log(Object.keys(countries[i].languages))
        const div = document.createElement('div')
        div.className = "col container w-25 d-flex flex-column border border-dark rounded-1 bg-success-subtle m-0 gap-4"
        const main = document.querySelector('#country')

        div.innerHTML = `
       
            <div class="text-center">
                <p class="m-0 py-2 fw-medium">${countries[i].name.common}</p>
            </div>
            <div>
                <img src="${countries[i].flags.svg}" class="img-fluid w-100 border rounded-1" alt="Bandera">
            </div>
            <div class="d-flex flex-column gap-3 py-3">
                <span class="text-wrap">capital: ${countries[i].capital[0]}</span>
                <spam class="text-wrap content-box">Idiomas: ${Object.keys(countries[i].languages)} </spam>
                <span class="text-wrap">Moneda: ${Object.keys(countries[i].currencies)} </span>
        `
        main.appendChild(div);
       }
    }) 



