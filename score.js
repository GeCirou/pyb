var pases = 0;
var bancas = 0;
var puntos = 0;
var ancares = 0;

document.getElementById("label_pase").innerHTML = pases;
document.getElementById("label_banca").innerHTML = bancas;
document.getElementById("label_punto").innerHTML = puntos;
document.getElementById("label_ancar").innerHTML = ancares;

function bancaGana() {
    bancas += 1;
    pases += 1;
    document.getElementById("label_banca").innerHTML = bancas;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById("B1").style.backgroundColor = "#000";
}
function puntoGana() {
    puntos += 1;
    pases += 1;
    document.getElementById("label_punto").innerHTML = puntos;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById("P1").style.backgroundColor = "#000";
}
function ancarDio() {
    ancares += 1;
    pases += 1;
    document.getElementById("label_ancar").innerHTML = ancares;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById("B1").style.backgroundColor = "#000";
    document.getElementById("P1").style.backgroundColor = "#000";
}

function reset() {
    pases = 0;
    bancas = 0;
    puntos = 0;
    ancares = 0;

    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById("label_banca").innerHTML = bancas;
    document.getElementById("label_punto").innerHTML = puntos;
    document.getElementById("label_ancar").innerHTML = ancares;

    document.getElementById("B1").style.backgroundColor = "#fff";
    document.getElementById("P1").style.backgroundColor = "#fff";
}