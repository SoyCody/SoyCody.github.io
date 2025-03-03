function direccionar() {
    let contraUno = document.getElementById("contra1").value;
    let contraDos = document.getElementById("contra2").value;
    let seleccion = document.getElementById("opciones");
    let seleccionado = seleccion.value;
    if(contraUno == contraDos){
        switch(seleccionado){
            case "Estudiante":   
                window.location.href="Estudiante.html";
                break;
            case "Profesor":
                window.location.href="Profesor.html";  
                break; 
            case "Administrador":
                window.location.href="Admin.html";     
                break;
            default:
                console.error("Opción no válida")    
        }
    } else {
        document.getElementById("excepcion").innerText = "Contraseña incorrecta";
        console.error("");
    }
}

function myPage() {
    window.location.href="principal.html";
}
