function contadorDePalabras(frase){
    let contadorEspacio = 0;
    let contadorLetras = 0;
    for(let c=0; c <= frase.length; c++){
        if (frase[c] == ' '){
            contadorEspacio++
        }
    }
    for (let i = 0; i <=frase.length; i++){
        if (frase[i] !== ' '){
            contadorLetras++
        }
    }
    return console.log("La frase tiene "+(contadorEspacio+1)+" palabras con "+ (contadorLetras-1) + " caracteres.")
}

let frase= "Hola"
console.log(frase)
contadorDePalabras(frase)