//Cambio de titulo y subtitulo
const titulo = document.getElementById('titulo');

titulo.innerText = 'LO MEJOR DE LA TECNOLOGIA';

const subtitulo = document.getElementById('subtitulo');

subtitulo.innerText = 'Lo  vas a encontrar acá!!';


//Creando los elementos HTML

class Celular {
    constructor(celular) {
        this.id = celular.id;
        this.marca = celular.marca;
        this.memoriaInterna = celular.memoriaInterna;
        this.precio = celular.precio;
        this.condicion = celular.condicion;
    }
};

const celulares = [{
        id: 0,
        marca: 'SAMSUNG A12',
        memoriaInterna: '64gb Memoria Interna',
        precio: 73999,
        imagen: './images/samsunga12.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 1,
        marca: 'SAMSUNG A53',
        memoriaInterna: '128gb Memoria Interna',
        precio: 108999,
        imagen: './images/samsunga53.png',
        condicion: 'Condicion: USADO'
    },
    {
        id: 2,
        marca: 'SAMSUNG NOTE 10',
        memoriaInterna: '256gb Memoria Interna',
        precio: 129999,
        imagen: './images/samsungnote10.jpg',
        condicion: 'Condicion: USADO'
    },
    {
        id: 3,
        marca: 'SAMSUNG S22 ULTRA',
        memoriaInterna: '256gb Memoria Interna',
        precio: 339999,
        imagen: './images/samsungs22.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 4,
        marca: 'IPAD PRO 12.9"',
        memoriaInterna: '256gb Memoria Interna',
        precio: 209999,
        imagen: './images/ipadpro129.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 5,
        marca: 'IPAD PRO 11',
        memoriaInterna: '128gb Memoria Interna',
        precio: 300000,
        imagen: './images/ipadpro11.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 6,
        marca: 'IPAD MINI',
        memoriaInterna: '64gb Memoria Interna',
        precio: 149999,
        imagen: './images/ipadmini64.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 7,
        marca: 'AIRPODS PRO',
        memoriaInterna: '256gb Memoria Interna',
        precio: 59999,
        imagen: './images/airpodspro.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 8,
        marca: 'IPHONE XS',
        memoriaInterna: '64gb Memoria Interna',
        precio: 178000,
        imagen: './images/iphonexs.png',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 9,
        marca: 'IPHONE 11 PRO',
        memoriaInterna: '128gb Memoria Interna',
        precio: 287000,
        imagen: './images/iphone11pro.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 10,
        marca: 'IPHONE 13 PRO',
        memoriaInterna: '256gb Memoria Interna',
        precio: 565000,
        imagen: './images/iphone13pro.jpg',
        condicion: 'Condicion: NUEVO'
    },
    {
        id: 11,
        marca: 'IPHONE 8 PLUS',
        memoriaInterna: '256gb Memoria Interna',
        precio: 230000,
        imagen: './images/iphone8plus.png',
        condicion: 'Condicion: NUEVO'
    }
];

const cards = document.getElementById('contenedor');

//invocando las funciones
crearCards();

function crearCards() {
    for (const celular of celulares) {
        cards.innerHTML += `
        <div class="col mt-4 text-center">
                <div class="card" style="width: 18rem;">
                    <img src="${celular.imagen}" class="card-img-top" alt="...">
                    <div class="card-body border-2">
                        <h5 class="card-title text-decoration-underline text-center">${celular.marca}</h5>
                        <p class="card-text text-center">
                            <ul id="ul">
                                <li>${celular.memoriaInterna}</li>
                                <li>${celular.condicion}</li>
                                <li class="precio">$${celular.precio}</li>
                            </ul>
                        </p>
                        <button class="btn btn-primary" type="submit">Agregar al carrito</button>
                    </div>
                </div>
            </div>`
    }
};

//CREANDO EVENTOS








