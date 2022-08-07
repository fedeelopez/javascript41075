//Cambio de titulo y subtitulo
const titulo = document.getElementById('titulo')

titulo.innerText = 'LO MEJOR DE LA TECNOLOGIA'

const subtitulo = document.getElementById('subtitulo')

subtitulo.innerText = 'Lo  vas a encontrar acá!!'



let carrito = [];
let cards = document.getElementById('contenedor');
let suma = document.getElementById('sumaCarro');

recuperarDelStorage();

function recuperarDelStorage() {
  if (localStorage.getItem("carrito") == null) {
    carrito = [];
  } else {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(celularComprado => {
      tableBody.innerHTML += `
      <tr>
      <td>${celularComprado.id}</td>
      <td>${celularComprado.marca}</td>
      <td>${celularComprado.memoriaInterna}</td>
      <td>${celularComprado.precio}</td>
      <td><button id="btn-cerrar${celularComprado.id}" type="button" class="btn-close" aria-label="Close"></button></td>
  </tr>
      `;
    })
  }
}

//Invocando las funciones
crearCards();

function crearCards() {
  for (const celular of celulares) {
    cards.innerHTML += `
        <div class="col mt-4 text-center">
                <div class="card" style="width: 18rem;">
                    <img src="${celular.imagen}" class="card-img-top" alt="...">
                    <div class="card-body border-2">
                        <h3 class="card-title text-decoration-underline text-center">${celular.marca}</h3>
                        <p class="card-text text-center">
                            <ul id="ul">
                                <li>${celular.memoriaInterna}</li>
                                <li>${celular.condicion}</li>
                                <li class="precio">$${celular.precio}</li>
                            </ul>
                        </p>
                        <button class="btn btn-primary" type="submit" id='boton${celular.id}'>Agregar al carrito</button>
                    </div>
                </div>
            </div>`
  }
}

//Asigna un evento a cada boton
celulares.forEach((celular) => {
  document.getElementById(`boton${celular.id}`).addEventListener('click', function () {
    agregarCarrito(celular)
  })
});

//Agrega al carrito creando una tabla
function agregarCarrito(celularComprado) {
  carrito.push(celularComprado);
  document.getElementById('tableBody').innerHTML += `
    <tr id= "fila${celularComprado.id}">
    <td>${celularComprado.id}</td>
    <td>${celularComprado.marca}</td>
    <td>${celularComprado.memoriaInterna}</td>
    <td>$ ${celularComprado.precio}</td>
    <td><button id="btn-cerrar${celularComprado.id}" type="button" class="btn-close" aria-label="Close"></button></td>
    </tr>`;

  sumaCarrito();

  let botonEliminar = document.getElementById(`btn-cerrar${celularComprado.id}`);
  botonEliminar.addEventListener("click", () => quitarDelCarrito(celularComprado.id));

  //Guarda cada producto elejido en el storage 
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function quitarDelCarrito(id) {
  let index = carrito.findIndex(celularComprado => celularComprado.id == id);
  carrito.splice(index, 1);
  let fila = document.getElementById(`fila${id}`);
  let table = document.getElementById('tableBody');
  table.removeChild(fila);
}

//Suma los precios de los productos agregados al carrito
function sumaCarrito() {
  let total = carrito.reduce((acc, celular) => acc + celular.precio, 0)
  suma.innerHTML = `
<h5><strong>PRECIO TOTAL:</strong> $${total}</h5>
`
}