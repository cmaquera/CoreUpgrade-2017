/*Dado un número n , se desea saber cúantos números primos 
existen desde 1 hasta n
*/

var n;

function primos(numero){
    var cant = 0;
    for(var i=1; i<=numero; i++){
        if(numero % i == 0) cant++;
    }
    
    if(cant == 2) return "primo" 
    else return "compuesto";
}


function cantidadPrimos(n){
    var cantidad = 0;
    for(var i=1; i<=n; i++){
        if(primos(i) == "primo") cantidad++;
    }
    
    return cantidad;
}

function mostrar(){
    n = document.getElementById("numero").value;
    console.log(n);
    if(n>=1 && n<=100000 && n % 1 == 0){
        document.getElementById("resultado").innerHTML = ( "La cantidad de numeros primos hasta " + n + " es : " + cantidadPrimos(n));
    }else
        document.getElementById("resultado").innerHTML = "Ingresa un numero natural entre (0 - 100000)";
}

