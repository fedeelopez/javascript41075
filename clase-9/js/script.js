//EVENTOS DOM
let boton = document.getElementById("miBoton");
//OPCION 1
// boton.addEventListener("click",interactuar);

// function interactuar() {
//     alert("Buen dia, hoy es " + new Date());
// }

//OPCION 2
boton.onclick=()=>{console.log("Hiciste click")};

boton.onmouseover=()=>{
    console.log("No me toques !!");
    boton.className = "btn btn-danger";
}

boton.onmouseout=()=>{
    boton.className = "btn btn-success";
}

//TECLADO
let campoNombre = document.getElementById("nombre");
let campoEdad = document.getElementById("edad");
campoEdad.onkeydown=()=>{console.log("Precionaste una tecla")};
campoEdad.onkeyup=()=>{console.log("Soltaste una tecla")};

campoEdad.onchange=()=> {
    console.log("Cambio de texto del campo edad");
    console.log("Texto actualizado: " + campoEdad.value);
}

campoNombre.oninput=()=> {
    if (!isNaN(campoNombre.value)) {
        campoNombre.style.color = "red";
    } else {
        campoNombre.style.color = "black";
    }
}

//EVENTO SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit",validarFormulario);

function validarFormulario(e) {
    if ((isNaN(campoEdad.value)) || (campoNombre.value=="")) {
        e.preventDefault(); //Evita que se borren los campos
        alert("Ingrese nombre o edad validos");
    }
}

//EVENTO DE TECLADO DETECTANDO EL ENTER
function capturarEnter(e) {
    //segun navegador usamos la propiedad which o keycode
    if (e.which==13 || e.keycode==13) {
        alert("Presionaste el ENTER!");
    }
}

//EVENTO COPY ON CLIPBOARD
let textosCopia = document.getElementsByClassName("textoP");
//textosCopia es un array si o si
textosCopia[0].addEventListener("copy",console.log("texto copiado"));
textosCopia[1].addEventListener("copy",console.log("texto copiado"));

function imprimirAlertaDeCopia() {
    console.log("Texto copiado");
}