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
        memoriaInterna: '64gb',
        precio: 73999
    },
    {
        id: 1,
        marca: 'SAMSUNG A53',
        memoriaInterna: '128gb',
        precio: 108999

    },
    {
        id: 2,
        marca: 'SAMSUNG NOTE 10',
        memoriaInterna: '256gb',
        precio: 129999
    },
    {
        id: 3,
        marca: 'SAMSUNG S22 ULTRA',
        memoriaInterna: '256gb',
        precio: 339999
    },
    {
        id: 4,
        marca: 'IPAD PRO 12.9"',
        memoriaInterna: '256gb',
        precio: 209999
    },
    {
        id: 5,
        marca: 'IPAD PRO 11',
        memoriaInterna: '128gb',
        precio: 300000

    },
    {
        id: 6,
        marca: 'IPAD MINI',
        memoriaInterna: '64gb',
        precio: 149999

    },
    {
        id: 7,
        marca: 'AIRPODS PRO',
        memoriaInterna: '256gb',
        precio: 59999
    },
    {
        id: 8,
        marca: 'IPHONE XS',
        memoriaInterna: '64gb',
        precio: 178000

    },
    {
        id: 9,
        marca: 'IPHONE 11 PRO',
        memoriaInterna: '128gb',
        precio: 287000
    },
    {
        id: 10,
        marca: 'IPHONE 13 PRO',
        memoriaInterna: '256gb',
        precio: 565000
    },
    {
        id: 11,
        marca: 'IPHONE 8 PLUS',
        memoriaInterna: '256gb',
        precio: 230000
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

alert(`El total a pagar de tu compra es $${precioTotal}.
Muchas gracias por tu compra, que tengas un buen dia!`);
console.table(carrito);