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
    alert(`Bienvenido a La Casa de la Tecnologia ${nombre}, elegi tus productos!!`);
}

function catalogo() {
    let listaCelulares = "";

    for (const celular of celulares) {
        listaCelulares += `${celular.id}: ${celular.marca} ${celular.memoriaInterna} $${celular.precio} \n`;
    }

    let idProducto = prompt(`Escribi el numero de producto que desees agregar al carrito, o escribi "FIN" para finalizar!! 
    ${listaCelulares} \n`);


    while (idProducto !== "FIN") {
        let celularSelec = carrito.find((element) => element.id == idProducto);

        if (celularSelec) {
            let index = carrito.findIndex((element) => element.id === celularSelec.id);
            carrito[index].agregarCelular();
            carrito[index].actualizarPrecio();
            alert(`Agregaste otro ${carrito[index].marca}, al carrito!!
            Ya tenes ${carrito[index].cantidad} Unidades`);
            console.table(carrito);
        } else {
            carrito.push(new Celular(celulares[idProducto]));
            alert(`Agregaste ${celulares[idProducto].marca} al carrito de compras!!`);
            console.table(carrito);
        }

        idProducto = prompt(`Queres seguir comprando?? Escribi el número del producto que desees agregar al carrito o escribi "FIN" para finalizar tu compra! 
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
Muchas gracias por tu compra, que tengas un buen dia!`);
console.table(carrito);