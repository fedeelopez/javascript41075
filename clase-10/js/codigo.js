// //STORAGE
// localStorage.setItem("usuario","Edu");
// localStorage.setItem("envioADomicilio", true);
// localStorage.setItem("descuento", 20);

// let nameUsuario = localStorage.getItem("usuario");
// let envio = localStorage.getItem("envioADomicilio");
// let dsct = localStorage.getItem("descuento");

// console.log(nameUsuario);
// console.log(envio == "true");
// console.log(parseInt(dsct));

// sessionStorage.setItem("cantidad", 3);
// sessionStorage.setItem("precios", [100,200,300,400]);

// //como quedo guardado esto? como un String
// let precios = sessionStorage.getItem("precios");
// console.log(precios);
// //utilizo un metodo para reconvertirlo en array: SPLIT
// let listaPrecios = precios.split(",");
// console.log(listaPrecios);
// //pasar los strings a entero
// let listaPrecioFinal = listaPrecios.map((precio)=>parseInt(precio));
// console.log(listaPrecioFinal);

// //Diapo 22
// //Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }

// //eliminar una dupla
// sessionStorage.removeItem("cantidad");
// //localStorage.clear() borro todo lo que hay

// //JSON
// const objeto = {nombre:"juancho", nota:7};
// localStorage.setItem("alumno", objeto); //no funciona
// const objetoAJson = JSON.stringify(objeto);
// localStorage.setItem("alumnoJSON", objetoAJson);

// let jsonStorage = localStorage.getItem("alumnoJSON");
// console.log(jsonStorage);
// //lo quiero transdormar en el objeto original JS
// const jsonAObjeto = JSON.parse(jsonStorage);
// console.log(jsonAObjeto);

// //Diapo 37 y 38
// const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
//                   {  id: 2,  producto: "Fideo", precio: 70 },
//                   {  id: 3,  producto: "Pan"  , precio: 50},
//                   {  id: 4,  producto: "Flan" , precio: 100}];

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //Almacenar producto por producto
// // for (const producto of productos) {
// //     guardarLocal(producto.id, JSON.stringify(producto));
// // }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));

// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos2 = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos2)
//     producto.sumaIva();

// console.log(productos2);

//modo dark-light





// let modo = localStorage.getItem("modo") || "light"; //asignacion condicional
// console.log(modo);

// let principal = document.getElementById("principal");
// let boton = document.getElementById("mode");
// document.body.className = modo;
// principal.className = "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" + modo;

// localStorage.setItem("modo", modo);

// boton.onclick=()=>{
//     if (modo == "light") {
//         document.body.className = "dark";
//         principal.className = "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center dark";
//         modo = "dark";
//         boton.innerText = "Light Mode";
//     } else {
//         document.body.className = "light";
//         principal.className = "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center light";
//         modo = "light";
//         boton.innerText = "Dark Mode";
//     }
//     localStorage.setItem("modo", modo);
// }