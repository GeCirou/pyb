var colorPrimario = "#207720";
var  colorSecundario = "#000";
var colorCheck = "#000";

var pases = 0;
var bancas = 0;
var puntos = 0;
var ancares = 0;

var historial =[];

document.getElementById("label_pase").innerHTML = pases;
document.getElementById("label_banca").innerHTML = bancas;
document.getElementById("label_punto").innerHTML = puntos;
document.getElementById("label_ancar").innerHTML = ancares;

function bancaGana() {
    if (pases < 90) {
        bancas += 1;
        pases += 1;

        let count = "B" + pases;

        historial.push(1);

        document.getElementById("label_banca").innerHTML = bancas;
        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById(count).style.backgroundColor = colorCheck;
    }
    else {
        alert("No hay más espacio.")
    }
}
function puntoGana() {
    if (pases < 90) {
        puntos += 1;
        pases += 1;

        let count = "P" + pases;

        historial.push(2);

        document.getElementById("label_punto").innerHTML = puntos;
        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById(count).style.backgroundColor = colorCheck;
    }
    else {
        alert("No hay más espacio.")
    }
    
}
function ancarDio() {
    if (pases < 90){
        ancares += 1;
        pases += 1;

        let countB = "B" + pases;
        let countP = "P" + pases;

        historial.push(3);

        document.getElementById("label_ancar").innerHTML = ancares;
        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById(countB).style.backgroundColor = colorCheck;
        document.getElementById(countP).style.backgroundColor = colorCheck;
    }
    else {
        alert("No hay más espacio.")
    }
}

function volver() {
    if (pases > 0){
        if (historial[historial.length-1] == 1){
            let count = "B" + pases;
    
            bancas -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_banca").innerHTML = bancas;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(count).style.backgroundColor = colorPrimario;
        }
        else if (historial[historial.length-1] == 2){
            let count = "P" + pases;
    
            puntos -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_punto").innerHTML = puntos;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(count).style.backgroundColor = colorPrimario;
        }
        else if (historial[historial.length-1] == 3){
            let countB = "B" + pases;
            let countP = "P" + pases;
    
            ancares -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_ancar").innerHTML = ancares;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(countB).style.backgroundColor = colorPrimario;
            document.getElementById(countP).style.backgroundColor = colorPrimario;
        }
    }
    else {
        alert("aún no pasó nada")
    }
}

function reset() {
    if (confirm("¿Seguro quiere borrar todo?")) {
        pases = 0;
        bancas = 0;
        puntos = 0;
        ancares = 0;

        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById("label_banca").innerHTML = bancas;
        document.getElementById("label_punto").innerHTML = puntos;
        document.getElementById("label_ancar").innerHTML = ancares;

        let i = 0;
        while (i < 91) {
            i += 1;
            let countB = "B" + i;
            let countP = "P" + i;
            /*let countNB = "NB" + i;*/

            document.getElementById(countB).style.backgroundColor = colorPrimario;
            document.getElementById(countP).style.backgroundColor = colorPrimario;

            /*document.getElementById(countNB).style.backgroundColor = colorPrimario;*/
        }
    }
    else {
        alert("Seguimos jugando.")
    }
    
}