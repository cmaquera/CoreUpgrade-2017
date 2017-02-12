/*Dado un número entero positivo N, se pide mostrar los siguientes 5 
números múltiplos de 3 mayores o iguales a n ( incluir n si este es 
múltiplo de 3) 
*/

var n = undefined;
var impares = [];

function mostrar(){

    n = document.getElementById("num").value;
    //console.log(n);
    if(n % 1 == 0 && n > 0){
        while(true){
            if(impares.length == 5) break;

            if(n % 3 == 0) impares.push(n);
            n++;
            console.log(n);
        }
        console.log(impares);
        document.getElementById("resultado").innerHTML = impares;
        impares.length = 0;
    }
    else
        document.getElementById("resultado").innerHTML = "Ingrese un numero entero positivo";
}