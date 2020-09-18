const axios = require("axios");
const boton = document.getElementById('boton');
const espacio = document.getElementById('espacio')
const saludo = document.getElementById('saludo')
let traducir = document.getElementById('traducir')
let opcion = document.getElementById('exampleFormControlSelect1')

const funcion = () => {
    if (espacio.value === '') {
        traducir.innerHTML = 'Escribe algo en la caja de arriba'
    }
    else {
        axios({
            "method": "GET",
            "url": "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com",
                "x-rapidapi-key": "d64bb7c315mshf1292430f74a7c1p1e5733jsn825b6f82c7ed",
                "useQueryString": true
            }, "params": {
                "source": `${opcion.value}`,
                "target": "de",
                "input": `${espacio.value}`
            }
        })
            .then((response) => {
                traducir.innerHTML = Object.values(response.data.outputs)[0].output;
            })
            .catch((error) => {
                console.log(error)
            })

    }
}
boton.addEventListener('click', funcion)
saludo.addEventListener('click', () => {
    alert('Saade te saluda')
})





