class Celular {
    constructor(precio, cantidad) {
        this.precio = precio;
        this.cantidad = parseInt(cantidad);
    }

    calcularPrecioconIva() {
        return this.precio * 1.21 * this.cantidad;
    }
}

class Carrito {
    constructor() {
       this.productos = [];
        this.total = 0;
    }

    agregarCelular(precio, cantidad) {
        const celular = new Celular(precio, cantidad);
        this.productos.push(celular);
    }

    calcularTotalconIva() {
        let total = 0;

        for (const celular of this.productos) {
            total = total + celular.calcularPrecioconIva();
        }
        this.total = total;

        return total;
    }
}

const carrito = new Carrito();

let celular;
let cantidad;
let continuar = false;
do {
    celular = prompt('Ingrese el celular que desea');
    cantidad = prompt('Ingrese cantidad');
    continuar = prompt('Quiere continuar ingresando valores? (y/N)') === 'y';

    carrito.agregarCelular(precio, cantidad);
} while (continuar);

alert('El total a pagar es: ' + carrito.calcularTotalconIva())

const precioTotal = celulares.reduce((acc, celular) => acc + celular.precio, 0)

console.log(precioTotal);