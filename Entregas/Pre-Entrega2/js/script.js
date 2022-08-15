//Creando los elementos HTML

let carrito = [];
let productosjs = [];
let cards = document.getElementById('contenedor');
let suma = document.getElementById('sumaCarro');

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
                        <button class="btn btn-primary" type="button" id='boton${celular.id}'>Agregar al carrito</button>
                    </div>
                </div>
            </div>`
  }

  celulares.forEach((celular) => {
    document.getElementById(`boton${celular.id}`).addEventListener('click', function () {
      agregarCarrito(celular)
    })
  })
}

crearCards();


function recuperarDelStorage() {
  if (localStorage.getItem("carrito")) {
    // pintar carrito
    carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.forEach(celuSeleccionado => {
      tableBody.innerHTML += `
      <tr id= "fila${celuSeleccionado.id}">
      <td>${celuSeleccionado.id}</td>
      <td>${celuSeleccionado.marca}</td>
      <td>${celuSeleccionado.memoriaInterna}</td>
      <td>${celuSeleccionado.precio}</td>
      <td><button id="btn-cerrar${celuSeleccionado.id}" type="button" class="btn-close" aria-label="Close"></button></td>
  </tr>
      `;
    })
    // agregar eventos a cada botón cerrar del carrito
    carrito.forEach((celuSeleccionado) => {
      document.getElementById(`btn-cerrar${celuSeleccionado.id}`).addEventListener("click", () => quitarDelCarrito(celuSeleccionado.id));
    })
  }
}

recuperarDelStorage();

//Agrega al carrito creando una tabla
function agregarCarrito(celuSeleccionado) {
  carrito.push(celuSeleccionado);
  //Guarda cada producto elejido en el storage 
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById('tableBody').innerHTML += `
    <tr id= "fila${celuSeleccionado.id}">
    <td>${celuSeleccionado.id}</td>
    <td>${celuSeleccionado.marca}</td>
    <td>${celuSeleccionado.memoriaInterna}</td>
    <td>$ ${celuSeleccionado.precio}</td>
    <td><button id="btn-cerrar${celuSeleccionado.id}" type="button" class="btn-close" aria-label="Close"></button></td>
    </tr>`;

  carrito.forEach((celuSeleccionado) => {
    document.getElementById(`btn-cerrar${celuSeleccionado.id}`).addEventListener("click", () => quitarDelCarrito(celuSeleccionado.id));
  })

  if (agregarCarrito) {
    Swal.fire({
      title: `Agregaste el producto al carrito!`,
      icon: 'success',
      position: 'center',
      confirmButtonText: 'OK!',
    })

    sumaCarrito();
  }
}

function quitarDelCarrito(id) {
  let index = carrito.findIndex(celuSeleccionado => celuSeleccionado.id === id);
  carrito.splice(index, 1);
  let fila = document.getElementById(`fila${id}`);
  let table = document.getElementById('tableBody');
  table.removeChild(fila);
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

//Suma los precios de los productos agregados al carrito
function sumaCarrito() {
  let total = carrito.reduce((acc, celular) => acc + celular.precio, 0)
  suma.innerHTML = `
<h5><strong>PRECIO TOTAL:</strong> $${total}</h5>
`
}

function restaTotal()





// //Creando los elementos HTML

// class Celular {
//   constructor(celular) {
//     this.id = celular.id
//     this.marca = celular.marca
//     this.memoriaInterna = celular.memoriaInterna
//     this.precio = celular.precio
//     this.condicion = celular.condicion
//   }
// }

// class Carrito {
//   constructor() {
//     this.cart = []
//     this.total = 0
//   }

//   agregarAlCarrito (producto) {
//     this.cart.push(producto)
//   }

//   mostrarCarrito () {
//     return this.cart
//   }
// }

// let carrito = [];
// let productosjs = [];
// let cards = document.getElementById('contenedor');
// let suma = document.getElementById('sumaCarro');

// recuperarDelStorage();

// function recuperarDelStorage () {
//   if (localStorage.getItem("carrito")) {
//     carrito = JSON.parse(localStorage.getItem("carrito"));
//     carrito.forEach(celuSeleccionado => {
//       tableBody.innerHTML += `
//       <tr id= "fila${celuSeleccionado.id}">
//       <td>${celuSeleccionado.id}</td>
//       <td>${celuSeleccionado.marca}</td>
//       <td>${celuSeleccionado.memoriaInterna}</td>
//       <td>${celuSeleccionado.precio}</td>
//       <td><button id="btn-cerrar${celuSeleccionado.id}" type="button" class="btn-close" aria-label="Close"></button></td>
//   </tr>
//       `;

//       let botonEliminar = document.getElementById(`btn-cerrar${celuSeleccionado.id}`);
//       botonEliminar.addEventListener("click", () => quitarDelCarrito(celuSeleccionado.id));
//     })
//   }
// }

// //Invocando las funciones
// crearCards();

// function crearCards () {
//   for (const celular of celulares) {
//     cards.innerHTML += `
//         <div class="col mt-4 text-center">
//                 <div class="card" style="width: 18rem;">
//                     <img src="${celular.imagen}" class="card-img-top" alt="...">
//                     <div class="card-body border-2">
//                         <h3 class="card-title text-decoration-underline text-center">${celular.marca}</h3>
//                         <p class="card-text text-center">
//                             <ul id="ul">
//                                 <li>${celular.memoriaInterna}</li>
//                                 <li>${celular.condicion}</li>
//                                 <li class="precio">$${celular.precio}</li>
//                             </ul>
//                         </p>
//                         <button class="btn btn-primary" type="submit" id='boton${celular.id}'>Agregar al carrito</button>
//                     </div>
//                 </div>
//             </div>`
//   }
// }

// //Asigna un evento a cada boton
// celulares.forEach((celular) => {
//   document.getElementById(`boton${celular.id}`).addEventListener('click', function () {
//     agregarCarrito(celular)
//   })
// });

// //Agrega al carrito creando una tabla
// function agregarCarrito (celuSeleccionado) {
//   carrito.push(celuSeleccionado);
//   //Guarda cada producto elejido en el storage 
//   localStorage.setItem("carrito", JSON.stringify(carrito));
//   document.getElementById('tableBody').innerHTML += `
//     <tr id= "fila${celuSeleccionado.id}">
//     <td>${celuSeleccionado.id}</td>
//     <td>${celuSeleccionado.marca}</td>
//     <td>${celuSeleccionado.memoriaInterna}</td>
//     <td>$ ${celuSeleccionado.precio}</td>
//     <td><button id='eliminar${celuSeleccionado.id}' type="button" class="btn-close" aria-label="Close"></button></td>
//     </tr>`;

//   if (agregarCarrito) {
//     Swal.fire({
//       title: `Agregaste el producto al carrito!`,
//       icon: 'success',
//       position: 'center',
//       confirmButtonText: 'OK!',
//     })

//     sumaCarrito();
//   }
// }


// function quitarDelCarrito (id) {
//   debugger
//   let index = carrito.findIndex(celuSeleccionado => celuSeleccionado.id === id);
//   carrito.splice(index, 1);
//   let fila = document.getElementById(`fila${id}`);
//   let table = document.getElementById('tableBody');
//   table.removeChild(fila);
// }

// let botonEliminar = document.getElementById(`eliminar${celuSeleccionado.id}`);
// botonEliminar.addEventListener("click", () => quitarDelCarrito(celuSeleccionado.id));


// //Suma los precios de los productos agregados al carrito
// function sumaCarrito () {
//   let total = carrito.reduce((acc, celular) => acc + celular.precio, 0)
//   suma.innerHTML = `
// <h5><strong>PRECIO TOTAL:</strong> $${total}</h5>
// `
// }