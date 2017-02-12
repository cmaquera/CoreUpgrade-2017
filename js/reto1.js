/*Peter acaba de dar un examen de matemática en el colegio y el día de 
hoy recibirá su nota en calificación numérica (número entero del 0 al 20). 
Él se encuentra investigando acerca de los algoritmos, por ello desea 
que usted realice un algoritmo que dada su nota muestre su equivalente 
en calificación en letras.
*/

var notaLetra = ["cero", "uno", "dos", "tres", "cuatro", "cinco", 
               "seis", "site", "ocho", "nueve", "diez", "once", 
               "doce", "trece", "catorce", "quince", "diesiseis", 
               "diesiete", "diesiocho", "diesinueve", "veinte"];
               
var nota =  undefined;

function preguntar(){
    nota = document.getElementById("nota").value;
    console.log(nota);
    if(nota >= 0 && nota <= 20 && nota % 1 == 0)
        document.getElementById("resultado").innerHTML = notaLetra[nota];
    else
        document.getElementById("resultado").innerHTML = "Ingrese la nota numerica correctamente";
}
