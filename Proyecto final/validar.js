const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarTexto(nombre.value)) {
        return console.log("Nombre invalido: Solo letras");
    }

    if (!validarTexto(apellido.value)) {
        return console.log("Apellido invalido: Solo letras");
    }

    if (!validarMail(mail.value)) {
        return console.log("Formato email no válido");
    }
    if (!validarTelefono(telefono.value)) {
        return console.log("Telefono invalido: Solo números");
    }

    console.log("Formulario enviado con éxito");
});

function validarTexto(texto){
    const regTexto = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!regTexto.test(texto)){
        return false;
    }else
        return true;
}

function validarMail(mail){
    const regMail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

    if(!regMail.test(mail)){
        return false;
    }else 
        return true;
}

function validarTelefono(telefono){
    const regTelefono = /^[0-9]+$/;

    if(!regTelefono.test(telefono)){
        return false;
    }else  
        return true;
}