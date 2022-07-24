//Lista de compra de celulares
//alert("Bienvenidos a la Casa de la Tecnologia")
/*['SAMSUNG A12', 'SAMSUNG A53', 'MOTOROLA MOTO G200', 'SAMSUNG NOTE 10', 'MOTOROLA MOTO E40', 'IPHONE XS'];*/
/*let ACCESORIOS = ['CARGADOR SAMGUNG S8', 'CARGADOR XIAOMI P10', 'CARGADOR IPHONE XS',];*/

//OBJETOS
class Celular {
    constructor(celular) {
        this.id = celular.id;
        this.marca = celular.marca;
        this.memoriaInterna = celular.memoriaInterna;
        this.precio = celular.precio;
        this.cantidad = 1;
        this.precioTotal = celular.precio;
    }

    agregarCelular() {
        this.cantidad++;
    }

    actualizarPrecio() {
        this.precioTotal = this.precio * this.cantidad;
    }
}
//ARRAY
const celulares = [{
        id: 0,
        marca: 'SAMSUNG A12',
        memoriaInterna: '128gb',
        precio: 20000
    },
    {
        id: 1,
        marca: 'SAMSUNG A53',
        memoriaInterna: '128gb',
        precio: 33200

    },
    {
        id: 2,
        marca: 'MOTOROLA MOTO G200',
        memoriaInterna: '64gb',
        precio: 32400
    },
    {
        id: 3,
        marca: 'MOTOROLA MOTO E',
        memoriaInterna: '256gb',
        precio: 55500
    },
    {
        id: 4,
        marca: 'SAMSUNG NOTE 10',
        memoriaInterna: '256gb',
        precio: 75000

    },
    {
        id: 5,
        marca: 'MOTORLA MOTE E40',
        memoriaInterna: '128GB',
        precio: 55500
    },
    {
        id: 6,
        marca: 'IPHONE XS',
        memoriaInterna: '256gb',
        precio: 75000

    },
    {
        id: 7,
        marca: 'XIAOMI POCO X3',
        memoriaInterna: '256gb',
        precio: 75000

    },
    {
        id: 8,
        marca: 'XIAOMI REDMI 9T',
        memoriaInterna: '256gb',
        precio: 55500
    },
    {
        id: 9,
        marca: 'IPHONE 11 PRO',
        memoriaInterna: '256gb',
        precio: 75000
    },
    {
        id: 10,
        marca: 'IPHONE 13 PRO',
        memoriaInterna: '128GB',
        precio: 55500
    },
    {
        id: 11,
        marca: 'IPHONE 8 PLUS',
        memoriaInterna: '256gb',
        precio: 75000
    }
];

let carrito = [];
let precioTotal;

//FUNCIONES
let nombre = prompt('Hola ingrese su nombre por favor.');

function saludo() {
    alert(`Bienvenido a La Casa de la Tecnologia ${nombre}, elegi tus productos`);
}

function catalogo() {
    let listaCelulares = "";

    for (const celular of celulares) {
        listaCelulares += `${celular.id}: ${celular.marca} ${celular.memoriaInterna} $${celular.precio} \n`;
    }

    let idProducto = prompt(`Escriba el numero de producto que desea agregar al carrito, o escriba "FIN" para finalizar! 
    ${listaCelulares} \n`);


    while (idProducto !== "FIN") {
        let celularSelec = carrito.find((element) => element.id == idProducto);

        if (celularSelec) {
            let index = carrito.findIndex((element) => element.id === celularSelec.id);
            carrito[index].agregarCelular();
            carrito[index].actualizarPrecio();
            alert(`Has agregado otro ${carrito[index].marca}, al carro!!
            Ya tienes ${carrito[index].cantidad} Unidades`);
            console.table(carrito);
        } else {
            carrito.push(new Celular(celulares[idProducto]));
            alert(`Has agregado ${celulares[idProducto].marca} al carrito de compras!!`);
            console.table(carrito);
        }

        idProducto = prompt(`Quiere seguir comprando? Escriba el numero del producto que desea agregar al carrito o escriba "FIN" para finalizar! 
        ${listaCelulares}`);
    }
}

function precioFinal() {
    let precioTotal = 0;
    for (const item of carrito) {
        precioTotal += item.precioTotal;
    }
    return precioTotal;
}

//INVOCACION DE LAS FUNCIONES
saludo();
catalogo();
precioTotal = precioFinal();

alert(`El total a pagar de tu compra es $${precioTotal}
Muchas gracias por tu compra, que tenga un buen dia!`);
console.table(carrito);



//alert("Elegi lo que estes necesitando")



// class Celular {
//     constructor(precio, cantidad) {
//         this.precio = precio;
//         this.cantidad = parseInt(cantidad);
//     }

//     calcularPrecioconIva() {
//         return this.precio * 1.21 * this.cantidad;
//     }
// }

// class Carrito {
//     constructor() {
//         this.productos = [];
//         this.total = 0;
//     }

//     agregarCelular(precio, cantidad) {
//         const celular = new Celular(precio, cantidad);
//         this.productos.push(celular);
//     }

//     calcularTotalconIva() {
//         let total = 0;

//         for (const celular of this.productos) {
//             total = total + celular.calcularPrecioconIva();
//         }
//         this.total = total;

//         return total;
//     }
// }

// const carrito = new Carrito();

// let celular;
// let cantidad;
// let continuar = false;
// do {
//     celular = prompt('Ingrese el celular que desea');
//     cantidad = prompt('Ingrese cantidad');
//     continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';

//     carrito.agregarCelular(precio, cantidad);
// } while (continuar);

// alert('El total a pagar es: ' + carrito.calcularTotalconIva())

// const precioTotal = celulares.reduce((acc, celular) => acc + celular.precio, 0)

// console.log(precioTotal);