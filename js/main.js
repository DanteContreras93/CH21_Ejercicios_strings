cadena1 = "Dante Francisco Contreras Romero";
console.log();

function nrepeticiones(cadena) {
    let revisados = [];
    for (let i = 0; i < cadena.length; i++) {
        let repetidos = 1;
        if (revisados.includes(cadena.charAt(i).toUpperCase()) ) {
            continue    
        } //if
        else 
        {
            revisados.push(cadena.charAt(i).toUpperCase())
        for (let j = i+1; j < cadena.length; j++) {
            if (cadena.charAt(i).toUpperCase() == cadena.charAt(j).toUpperCase()) {
                repetidos ++;
            }//if cadena.char
            
        }//for j
        if (repetidos == 1) {
            console.log("La letra " + cadena.charAt(i).toUpperCase() + " aparece " + repetidos + " vez");
        } //if repetidos
        else {
            console.log("La letra " + cadena.charAt(i).toUpperCase() + " aparece " + repetidos + " veces");
        }//else repetidos
        
    }//else
        }//for i
}//function

function masrepeticiones(cadena) {
    //arreglo para almacenar revisados
    let revisados = [];
    //iniciar repeticiones globales
    let repetidos_mas = 0;
    //iniciar caracter más repetido
    let letram = cadena[0]
    //for para recorrer cada caracer del arreglo
    for (let i = 0; i < cadena.length; i++) {
        //iniciar contador de revisión de cada caracter en 1
        let repetidos = 0
        //revisar si ya se evaluo el caracter
        if (revisados.includes(cadena.charAt(i).toUpperCase()) ) {
            continue    
        } //if
        //si no se ha revisado se cuenta las veces que aparece el cáracter en la cadena
        else 
        {
        revisados.push(cadena.charAt(i).toUpperCase())
        for (let j = i; j < cadena.length; j++) {
            if (cadena.charAt(i).toUpperCase() == cadena.charAt(j).toUpperCase()) {
                repetidos ++;
            }//if cadena.char
            
        }//for j
        //si el contador del caracter es mayor que el global, se sustituye el contador global y se guarda el caracter de más repeticiones
        if (repetidos_mas < repetidos) {
            repetidos_mas = repetidos
            letram = cadena[i]
        }
        
    }//else
        }//for i
    //regresar mensaje a consola
    console.log(cadena);

    if (repetidos_mas == 0) {
        console.log("la cadena está vacía");
    } else {
        if (repetidos_mas == 1) {
            console.log("la letra " + letram + " se repite " + repetidos_mas + " vez");
        } else {
            console.log("la letra " + letram + " se repite " + repetidos_mas + " veces");
        }
    }
}//function



masrepeticiones(cadena1)


let btnEnviar = document.addEventListener("click", function(event){
    event.preventDefault();

    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
    let alertaError = document.getElementById("alertaError");

    let emailRegex = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])"
    
    alertaError.style.display = "none";
    alertaError.style.display = "";

    if (exampleFormControlTextarea1.value.trim().replaceAll("  ", "").length < 20) {
        alertaError.innerHTML = "El mensaje debe contener al menos 20 caracteres"
        alertaError.style.display="block"

    }// if

    if (exampleFormControlInput1.value.match(emailRegex) == null) {
        
        alertaError.style.display="block";
        alertaError.innerHTML = "<br/> El correo electrónico no es válido. ";
    } //if

});
