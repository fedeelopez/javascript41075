// Un array es una lista de elementos
// Los elementos pueden ser cualquier valor
const miPrimerArray = [1, { nombre: 'Ariel' } , 6, 'hola', false, []];

// Ejemplos con array de string
const avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];

// Para acceder a los elementos del array lo hacemos con []
// y el valor del indice.
console.log(avengers[2]); // Devuelve Thor
console.log(avengers[10]); // Devuelve undefined

// Para cambiar valores usamos el operador de asignacion (=).
avengers[3] = 'Black Widow';
console.log(avengers);

// Para recorrer el array podemos usar un for.
for (let i = 0; i < avengers.length; i++) {
  console.log(avengers[i]);
}

// Crear un carrito de compras para agregar items
// y calcular el total con iva.

// Definimos una clase Producto.
class Producto {
    constructor(precio, cantidad) {
      this.precio = parseFloat(precio);
      this.cantidad = parseInt(cantidad);
    }
  
    calcularPrecioconIva() {
      return this.precio * 1.21 * this.cantidad;
    }
  }
  
  // Definimos una clase Carrito.
  class Carrito {
    constructor() {
      this.productos = [];
      this.total = 0;
    }
  
    agregarProducto(precio, cantidad) {
      const producto = new Producto(precio, cantidad);
      this.productos.push(producto);
    }
  
    calcularTotalconIva() {
      let total = 0;
  
      for (const producto of this.productos) {
        total = total + producto.calcularPrecioconIva();
      }
      this.total = total;
  
      return total;
    }
  }
  
  // Creamos un nuevo carrito.
  const carrito = new Carrito();
  
  let precio;
  let cantidad;
  let continuar = false;
  do {
    // Pedimos que ingrese precio y cantidad.
    precio = prompt('Ingrese precio');
    cantidad = prompt('Ingrese cantidad');
  
    // Preguntamos si queremos continuar ingresando valores mientras ingrese 'y'.
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';
  
    // agregamos el producto al carrito.
    carrito.agregarProducto(precio, cantidad);
  } while(continuar);
  
  // Le pedimos al carrito que calcule el total con iva.
  // y lo mostramos con alert.
  alert('El total a pagar es: ' + carrito.calcularTotalconIva());

  // Ejemplo de una lista de supermercado.
const listaSuper = [];

let entrada;
do {
  entrada = prompt('Ingrese un producto. Ingrese FIN para terminar');
  if (entrada != 'FIN') {
    listaSuper.push(entrada);
  }
} while (entrada != 'FIN');

// Mostramos la cantidad de elementos ingresados.
alert('La lista tiene ' + listaSuper.length + ' productos.');
// Mostramos todos los elementos unos abajo de otro.
alert('La lista tiene:\n' + listaSuper.join('\n'));

let avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];

// Length muestra la cantidad de elementos del array.
console.log('length', avengers.length);

// Con push agregamos un elemento al final del array.
console.log(avengers.push('Black Widow'));
// Con unshift agregamos un elemento al principio del array.
console.log(avengers.unshift('Hawkeye'));
console.log('agregar elementos', avengers);

// Con pop removemos un elemento del final del array.
console.log(avengers.pop());
// Con shift removemos un elemento del principio del array.
console.log(avengers.shift());
console.log('quitar elementos', avengers);

// splice(param1, param2) remueve desde el indice param1 la cantidad
// de elementos especificado en el param 2.
avengers.splice(0, 2);
console.log('splice', avengers);

avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk'];
// Join junta los arrays con el sring que se le pasa por parametro
// y devuelve un string.
console.log('join', avengers.join(', ')); // 'Iron Man, Captain America, Thor, Hulk'

// Concat une dos arrays y devuelve un nuevo array con el contenido de ambos.
const nuevosAvengers = ['Spiderman', 'Hawkeye'];
console.log('concat', avengers.concat(nuevosAvengers));
console.log('concat', nuevosAvengers.concat(avengers));

// slice(param1, param2) comienza desde el indice ingresado en param1
// y finaliza en el elemento anterior al indice especificado en el param2.
console.log('slice', avengers.slice(1, 3)); // ['Captain America', 'Thor']

// Devuelve el indice del valor recibido por parametro
// si no existe el valor, devuelve -1
console.log('indexOf', avengers.indexOf('Ariel')); // -1
console.log('indexOf', avengers.indexOf('Thor')); // 2

// Devuelve true si el value existe en el array.
// Si no existe devuelve false.
console.log('includes', avengers.includes('Ariel')); // false
console.log('includes', avengers.includes('Thor')); // true

// Invierte el orden de los valores del array.
// Es destructivo, por lo que modifica el array original.
avengers.reverse();
console.log('reverse', avengers);