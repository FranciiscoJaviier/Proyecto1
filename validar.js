var nombre = document.getElementById("nombre");
const form = document.getElementById("form1");
var msj = document.getElementById("mensajes");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("Correo");
var con1 = document.getElementById("clave1");
var con2 = document.getElementById("clave2");
var user = document.getElementById("usuario"); // Llama a todas las clases creadas que vamos a ocupar en esta ventana




form.addEventListener("submit", e =>{
    e.preventDefault()
    let mensajesMostrar = "";
    let entrar = false; 
// VALIDACION DE NOMBRE
    if(nombre.value.length < 6 || nombre.value.length > 12){ // El largo de un nombre es de minimo 4 caracteres y con un maximo de 12
        entrar = true;
    }

    var letraInicial = nombre.value.charAt(0); // la primera letra tiene que ser mayuscula
    if(!esMayuscula(letraInicial)){
        mensajesMostrar += "La primera letra del nombre es minuscula <br>";
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

    //VALIDAR APELLIDO

    if(apellido.value.length < 6 || apellido.value.length > 18 ){ // El largo de un apellido es de minimo 6 caracteres y con un maximo de 12
        entrar = true;
        mensajesMostrar += 'El apellido ingresado no es valido <br>'
        entrar = true;
    }

    letraInicial = apellido.value.charAt(0);
    if(!esMayuscula(letraInicial)){
        mensajesMostrar += 'La primera letra del apellido es minuscula <br>'
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario enviado";
    }

    //VALIDAR CORREO
    
    let regexcorreo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  //Expresion regular,, para validar el correo tiene que tener un @ y validar la direccion con un .com, .cl

        console.log(regexcorreo.test(correo.value))
        if (!regexcorreo.test(correo.value)){ // aqui valida que el correo tenga el @ y un .
        mensajesMostrar +='El correo no es valido<br>'
        entrar = true;  
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario enviado"; // valida que todos los datos esten correctos para que salga el mensaje
    }

    // GENERAR CONTRASEÑA

    if(con1.value.length < 7 || con1.value.length > 15){  //la contraseña debe tener un largo de 7 a 15 caracteres.
        mensajesMostrar +='la contraseña debe tener un largo de 7 a 15 caracteres<br>'
        entrar = true;
    }

    let er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15}$/ // expresion regular que permite nayusculas, puntos y numeros.
    console.log(er.test(con1.value))
    if(!er.test(con1.value)){
        mensajesMostrar +='La contraseña debe tener al menos 1 mayuscula, minuscula y un numero<br>'
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

    //CONFIRMAR CONTRASEÑAS
    
    if(con1.value != con2.value){ // si la contraseña ingresada es distinta mostrara el mensaje de abajo
        mensajesMostrar +='Las contraseñas no coinciden<br>';
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }
    else{
        msj.innerHTML = "Formulario Enviado";
    }

    // VALIDAR NOMBRE DE USUARIO

    let nickname = /[A-Za-z0-9_-]{7,15}/ // Solo acepta Numeros y letras y guiones
    console.log(nickname.test(user.value))
    if(!nickname.test(user.value)){
        mensajesMostrar +='El nombre de usuario debe tener entre 7 a 15 caracteres. <br>'
        entrar = true;
    }

    if(entrar){
        msj.innerHTML = mensajesMostrar;
    }else{
        msj.innerHTML = "Formulario enviado";
    }


    



   
})

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}





