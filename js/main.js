// Creando una variable para "obtener" todas las entradas
const inputs = document.querySelectorAll('.input');

// Función para agregar etiqueta dinámica a las entradas
function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

// Función para colapsar la etiqueta dinámica cuando hay un clic del mouse fuera del formulario
function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

// Función para agregar eventos
inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

// Tomando el modal
var modal = document.getElementById("modal-terms");

// Tomando el botón que dispara el modal
var btn = document.getElementById("action-modal");

// Obteniendo el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, se mostrará el modal
btn.onclick = function () {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), el modal se cerrará
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, se cerrará
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tomando el modal de registro opción
var modal2 = document.getElementById("modal-terms2");

// Tomando el botón que dispara el modal
var btn = document.getElementById("action-modal2");

// Obteniendo el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, se mostrará el modal
btn.onclick = function () {
    modal2.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), el modal se cerrará
span.onclick = function () {
    modal2.style.display = "none";
}

// Cuando el usuario haga clic en cualquier lugar fuera del modal, se cerrará
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
