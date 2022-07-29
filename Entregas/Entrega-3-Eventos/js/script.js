let bodyy = document.querySelector("body");
let btnLight = document.getElementById("light");
let btnDark = document.getElementById("dark");

btnLight.onclick = () => {
    console.log("SUNLIIGHT!!");
    bodyy.className = "modLight";
};

btnDark.onclick = () => {
    console.log("NIGHTCALL!!!");
    bodyy.className = "modDark";
};

let contenedor = document.getElementById("contenedor");
const count = document.createElement("h1");
count.innerText = "CONTADOR";
contenedor.appendChild(count);
const btn1 = document.createElement("button");
btn1.innerText = "SUBE";
btn1.className = "btn btn-info";
contenedor.appendChild(btn1);
const btn2 = document.createElement("button");
btn2.innerText = "BAJA";
btn2.className = "btn btn-danger";
contenedor.appendChild(btn2);
const contador = document.createElement("h4");
contador.innerHTML = "Contador: <span>0</span>";
contenedor.appendChild(contador);
contador.className = "my-5";

const span = document.querySelector("span");
let cuenta = 0;
btn1.addEventListener("click", () => {
    console.log("ESTAS SUBIENDOOO!");
    cuenta++;
    span.innerText = cuenta;
});
btn2.addEventListener("click", () => {
    console.log("ESTAS BAJANDOOO!!!");
    cuenta--;
    span.innerText = cuenta;
});