function contadorDeLetras(texto, letra){
    let contador = 0;
    for (let num = 0; num <= texto.length; num++){
        if (letra == texto[num])
        contador= contador + 1;
    }
    return contador
}

function contadorPalabras(texto){
    let contador = 0;
    //let espacio = " ";
    for (let num = 0; num <= texto.length; num++){
        if (texto[num] == " "){
            contador = contador + 1;
        }
    }
    return contador+1
}

let texto = "Yo me llamo Juan Perez y estoy aprendiendo Javascript";
let letra = "i";
console.log(texto)
console.log("Este texto tiene "+ contadorDeLetras(texto,letra)+ " letras " + letra)
console.log("el largo del texto es de "+(texto.length+1)+ " caracteres")
console.log("hay "+contadorPalabras(texto)+ " palabras")