/* Crear una funcion que reciba por parametro un numero, para ser usado dentro de la misma como el 
numero de intentos. Usar la estructura correspondiente que permita simular 'tirar una moneda' con dos resultados
posibles, cara o seca (los representaremos con 0 o 1). Para ello usaremos las funciones nativas de JS Math.random(), 
que retorna un numero pseudo-aleatorio en el rango [0,1]
y Math.round(), que retorna un numero redondeado al entero más cercano.
Cuando acaben los intentos previstos, debe mostrarse en consola cuantas veces salió cara
(representado por el 0) en el numero de intentos, acompañado por el porcentaje de efectividad en los aciertos.
*/

function aleatorio(numero){
    let contador = 0;    
    for (let c=1; c <= numero; c++){
        let tirarmoneda= Math.round(Math.random());
        (tirarmoneda == 0) ? contador++:"";
    }
    var porcentaje = (contador*100)/numero 
    return ("Salio "+ contador + " veces cara con "+ numero+ " intentos con un %"+porcentaje+ " de efectividad")
}

console.log(aleatorio(1000));