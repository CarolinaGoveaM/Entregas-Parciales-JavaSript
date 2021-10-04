//  Evento para modo oscuro
let botonDarkMode = document.getElementById("botonDarkMode");
botonDarkMode.addEventListener("click", cambiarTema);

//  Evento para mostrar menu discos
let botonMostrarMenu = document.getElementById("botonMostrarMenu");
botonMostrarMenu.addEventListener("click", mostrarFormulario)

//  Evento para guardar formulario de discos
let formulario = document.getElementById("formularioDiscos");
formulario.addEventListener("submit", guardarDisco);

//  Funcion para cambiar de tema
function cambiarTema() {
    document.body.classList.toggle("botonDarkMode");
}

//  Funcion para cargar listado del localStorage
function cargarListado() {
    let listadoDiscos = JSON.parse(localStorage.getItem("listadoDiscos"));
    if (listadoDiscos == null) {
        return [];
    }
    return listadoDiscos;
}

//  Funcion para guardar en localStorage
function guardarListado(listadoDiscos) {
    localStorage.setItem("listadoDiscos", JSON.stringify(listadoDiscos));
    mostrarListado(listadoDiscos);
}

//  Funcion para guardar discos
function guardarDisco(e) {
    e.preventDefault();
    let cantante = document.querySelector("#cantante").value;
    let disco = document.querySelector("#disco").value;
    let genero = document.querySelector("#genero").value;
    let precio = document.querySelector("#precio").value;

    let listadoDiscos = cargarListado();

    listadoDiscos.push(new Disco(cantante, disco, genero, precio));

    guardarListado(listadoDiscos);

    document.getElementById('formularioDiscos').reset();
}

//  Funcion para mostrar el menu de discos
function mostrarFormulario() {
    document.querySelector("#menuAgregar").classList.toggle("oculto");
}

//  Funcion para armar una tarjeta
function armarTarjeta(elemento) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombreCantante = document.createElement("h2");
    nombreCantante.textContent = `${elemento.cantante}`
    tarjeta.appendChild(nombreCantante);

    const nombreDisco = document.createElement("h3");
    nombreDisco.textContent = `${elemento.disco}`
    tarjeta.appendChild(nombreDisco);

    const genero = document.createElement("div");
    genero.textContent = `Genero: ${elemento.genero}`;
    tarjeta.appendChild(genero);

    const precio = document.createElement("div");
    precio.textContent = `Precio: ${elemento.precio}`;
    tarjeta.appendChild(precio);

    return tarjeta;
}

function mostrarListado(listadoDiscos) {
    let listado = document.getElementById("listado");
    listado.textContent = "";
    listadoDiscos.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
}

mostrarListado(cargarListado());