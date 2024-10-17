document.title = "Iniciar Sesion";
//---------------------------------------

//crear contenedor principal para el usuario
const contenedor = document.createElement("div");
contenedor.style.margin = "20px";

//crear titulo
const titulo = document.createElement("h2");
titulo.textContent = "iniciar sesion";
contenedor.appendChild(titulo);

//crear el formulario
const formulario = document.createElement("form");

//crear campo de de nombre de usuario
const usernameLabel = document.createElement("label");
usernameLabel.textContent = "nombre de usuario: ";
const usernameInput = document.createElement("input");
usernameInput.type = 'text';
usernameInput.required = true;
formulario.appendChild(usernameInput);
formulario.appendChild(usernameLabel);

//crear campo de contraseña de usuario
const passwordLabel = document.createElement("label");
passwordLabel.textContent = "contraseña: ";
const passwordInput = document.createElement("input");
passwordInput.type = 'password';
passwordInput.required = true;
formulario.appendChild(passwordInput);
formulario.appendChild(passwordLabel);

//crear boton de envio (submit)
const botonEnviar = document.createElement("button");
botonEnviar.textContent = "iniciar sesion";
formulario.appendChild(botonEnviar);

//mensaje de respuesta
const mensaje = document.createElement("p");
contenedor.appendChild(formulario);
contenedor.appendChild(mensaje);

//agregar el contenedor al cuerpo del body
document.body.appendChild(contenedor);

//datos de inicio de sesion redefinida
const validarUser = 'Fornik';
const validaPassword = '1999';

//validar el user y password
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    //validar el nombre y la contraseña
    if (usernameInput.value == validarUser && passwordInput.value == validaPassword) {
        mensaje.textContent = 'BIENVENIDO';
        mensaje.style.color = 'green';
    }else {
        mensaje.textContent = 'Usuario o contraseña incorrectos';
        mensaje.style.color = 'red';
    }

    //limpiar los imputs
    usernameInput.value = "";
    passwordInput.value = "";
});