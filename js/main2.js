function inv_cadena(cadena) {
    cadena_inversa = ""
    largo = cadena.length   
        for (let i = 0; i<= cadena.length; i++) 
        {
        cadena_inversa += cadena.charAt(largo - i);
        }//for

    return cadena_inversa
}//function


function remove_puntuation(cadena) {

    cadena = cadena.replace(new RegExp(/\s/g),"");
    cadena = cadena.replace(new RegExp(/[àáâãäå]/g),"a");
    cadena = cadena.replace(new RegExp(/æ/g),"ae");
    cadena = cadena.replace(new RegExp(/ç/g),"c");
    cadena = cadena.replace(new RegExp(/[èéêë]/g),"e");
    cadena = cadena.replace(new RegExp(/[ìíîï]/g),"i");
    cadena = cadena.replace(new RegExp(/ñ/g),"n");                
    cadena = cadena.replace(new RegExp(/[òóôõö]/g),"o");
    cadena = cadena.replace(new RegExp(/œ/g),"oe");
    cadena = cadena.replace(new RegExp(/[ùúûü]/g),"u");
    cadena = cadena.replace(new RegExp(/[ýÿ]/g),"y");
    cadena = cadena.replace(new RegExp(/\W/g),"");
    return cadena;
    
}


function esPalindromo(cadena) {
    cadena = cadena.toUpperCase();
    cadena = cadena.replace(" ", "");
    cadena = remove_puntuation(cadena);

    if (cadena == inv_cadena(cadena)) {
        return true
    }//if
    return false
}//esPalidromo

