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
    let count = "B" + pases;
    document.getElementById("label_banca").innerHTML = bancas;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById(count).style.backgroundColor = "#000";
}
function puntoGana() {
    puntos += 1;
    pases += 1;
    let count = "P" + pases;
    document.getElementById("label_punto").innerHTML = puntos;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById(count).style.backgroundColor = "#000";
}
function ancarDio() {
    ancares += 1;
    pases += 1;
    let countB = "B" + pases;
    let countP = "P" + pases;
    document.getElementById("label_ancar").innerHTML = ancares;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById(countB).style.backgroundColor = "#000";
    document.getElementById(countP).style.backgroundColor = "#000";
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
    document.getElementById("B2").style.backgroundColor = "#fff";
    document.getElementById("P2").style.backgroundColor = "#fff";
    document.getElementById("B3").style.backgroundColor = "#fff";
    document.getElementById("P3").style.backgroundColor = "#fff";
    document.getElementById("B4").style.backgroundColor = "#fff";
    document.getElementById("P4").style.backgroundColor = "#fff";
    document.getElementById("B5").style.backgroundColor = "#fff";
    document.getElementById("P5").style.backgroundColor = "#fff";
    document.getElementById("B6").style.backgroundColor = "#fff";
    document.getElementById("P6").style.backgroundColor = "#fff";
}