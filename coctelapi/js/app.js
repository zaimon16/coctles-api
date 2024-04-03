function buscar() {
  document.getElementById("contenido").innerHTML = ''
  valor = document.getElementById("cocteles").value
  cadena = ""
  //conexion a la api o ruta
  url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + valor
  fetch(url)
    .then(response => response.json())
    .then(data => visualizar(data))
    .catch(error => console.log(error))
  const visualizar = (data => {
    console.log(data)
    cadena = ""
    for (let i = 0; i < data.drinks.length; i++) {
      const coctel = data.drinks[i]
      cadena += `<div>`
      cadena += `<strong>Nombre:</strong> ${coctel.strDrink} <br>`
      cadena += `<img src=${coctel.strDrinkThumb} width="200" height="200"></img> <br>`
      cadena += `</div>`
    }
    document.getElementById("contenido").innerHTML = cadena
  })
}
