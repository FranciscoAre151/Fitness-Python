const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const mail = document.getElementById("mail");
const telefono = document.getElementById("telefono");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validarTexto(nombre.value)) {
        console.log("Nombre invalido: Solo letras");
        return alert("Nombre invalido: Solo letras");
    }

    if (!validarTexto(apellido.value)) {
        console.log("Apellido invalido: Solo letras");
        return alert("Apellido invalido: Solo letras");
    }

    if (!validarMail(mail.value)) {
        console.log("Formato email no válido");
        return alert("Formato email no válido");
    }
    if (!validarTelefono(telefono.value)) {
       console.log("Telefono invalido: Solo números");
       return alert("Telefono invalido: Solo números");
    }

   return alert("Formulario enviado con éxito");
});

function validarTexto(texto){
    const regTexto = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if(!regTexto.test(texto)){
        return false;
    }else
        return true;
}

function validarMail(mail){
    const regMail = /^[A-Za-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

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