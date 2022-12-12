cadena = "Dante Francisco Contreras Romero"


function inv_cadena(cadena) {
cadena_inversa = ""
largo = cadena.length   
for (let i = 0; i<= cadena.length; i++) 
    {
  cadena_inversa += cadena.charAt(largo - i);
    }//for
console.log(cadena_inversa);
return cadena_inversa
}//function

inv_cadena(cadena)