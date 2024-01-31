var colorPrimario = "#004e00";
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

            document.getElementById(countB).style.backgroundColor = colorPrimario;
            document.getElementById(countP).style.backgroundColor = colorPrimario;
        }
        

        /*document.getElementById("B1").style.backgroundColor = colorPrimario;
        document.getElementById("P1").style.backgroundColor = colorPrimario;
        document.getElementById("B2").style.backgroundColor = colorPrimario;
        document.getElementById("P2").style.backgroundColor = colorPrimario;
        document.getElementById("B3").style.backgroundColor = colorPrimario;
        document.getElementById("P3").style.backgroundColor = colorPrimario;
        document.getElementById("B4").style.backgroundColor = colorPrimario;
        document.getElementById("P4").style.backgroundColor = colorPrimario;
        document.getElementById("B5").style.backgroundColor = colorPrimario;
        document.getElementById("P5").style.backgroundColor = colorPrimario;
        document.getElementById("B6").style.backgroundColor = colorPrimario;
        document.getElementById("P6").style.backgroundColor = colorPrimario;
        document.getElementById("B7").style.backgroundColor = colorPrimario;
        document.getElementById("P7").style.backgroundColor = colorPrimario;
        document.getElementById("B8").style.backgroundColor = colorPrimario;
        document.getElementById("P8").style.backgroundColor = colorPrimario;
        document.getElementById("B9").style.backgroundColor = colorPrimario;
        document.getElementById("P9").style.backgroundColor = colorPrimario;
        document.getElementById("B10").style.backgroundColor = colorPrimario;
        document.getElementById("P10").style.backgroundColor = colorPrimario;

        document.getElementById("B11").style.backgroundColor = colorPrimario;
        document.getElementById("P11").style.backgroundColor = colorPrimario;
        document.getElementById("B12").style.backgroundColor = colorPrimario;
        document.getElementById("P12").style.backgroundColor = colorPrimario;
        document.getElementById("B13").style.backgroundColor = colorPrimario;
        document.getElementById("P13").style.backgroundColor = colorPrimario;
        document.getElementById("B14").style.backgroundColor = colorPrimario;
        document.getElementById("P14").style.backgroundColor = colorPrimario;
        document.getElementById("B15").style.backgroundColor = colorPrimario;
        document.getElementById("P15").style.backgroundColor = colorPrimario;
        document.getElementById("B16").style.backgroundColor = colorPrimario;
        document.getElementById("P16").style.backgroundColor = colorPrimario;
        document.getElementById("B17").style.backgroundColor = colorPrimario;
        document.getElementById("P17").style.backgroundColor = colorPrimario;
        document.getElementById("B18").style.backgroundColor = colorPrimario;
        document.getElementById("P18").style.backgroundColor = colorPrimario;
        document.getElementById("B19").style.backgroundColor = colorPrimario;
        document.getElementById("P19").style.backgroundColor = colorPrimario;
        document.getElementById("B20").style.backgroundColor = colorPrimario;
        document.getElementById("P20").style.backgroundColor = colorPrimario;

        document.getElementById("B21").style.backgroundColor = colorPrimario;
        document.getElementById("P21").style.backgroundColor = colorPrimario;
        document.getElementById("B22").style.backgroundColor = colorPrimario;
        document.getElementById("P22").style.backgroundColor = colorPrimario;
        document.getElementById("B23").style.backgroundColor = colorPrimario;
        document.getElementById("P23").style.backgroundColor = colorPrimario;
        document.getElementById("B24").style.backgroundColor = colorPrimario;
        document.getElementById("P24").style.backgroundColor = colorPrimario;
        document.getElementById("B25").style.backgroundColor = colorPrimario;
        document.getElementById("P25").style.backgroundColor = colorPrimario;
        document.getElementById("B26").style.backgroundColor = colorPrimario;
        document.getElementById("P26").style.backgroundColor = colorPrimario;
        document.getElementById("B27").style.backgroundColor = colorPrimario;
        document.getElementById("P27").style.backgroundColor = colorPrimario;
        document.getElementById("B28").style.backgroundColor = colorPrimario;
        document.getElementById("P28").style.backgroundColor = colorPrimario;
        document.getElementById("B29").style.backgroundColor = colorPrimario;
        document.getElementById("P29").style.backgroundColor = colorPrimario;
        document.getElementById("B30").style.backgroundColor = colorPrimario;
        document.getElementById("P30").style.backgroundColor = colorPrimario;

        document.getElementById("B31").style.backgroundColor = colorPrimario;
        document.getElementById("P31").style.backgroundColor = colorPrimario;
        document.getElementById("B32").style.backgroundColor = colorPrimario;
        document.getElementById("P32").style.backgroundColor = colorPrimario;
        document.getElementById("B33").style.backgroundColor = colorPrimario;
        document.getElementById("P33").style.backgroundColor = colorPrimario;
        document.getElementById("B34").style.backgroundColor = colorPrimario;
        document.getElementById("P34").style.backgroundColor = colorPrimario;
        document.getElementById("B35").style.backgroundColor = colorPrimario;
        document.getElementById("P35").style.backgroundColor = colorPrimario;
        document.getElementById("B36").style.backgroundColor = colorPrimario;
        document.getElementById("P36").style.backgroundColor = colorPrimario;
        document.getElementById("B37").style.backgroundColor = colorPrimario;
        document.getElementById("P37").style.backgroundColor = colorPrimario;
        document.getElementById("B38").style.backgroundColor = colorPrimario;
        document.getElementById("P38").style.backgroundColor = colorPrimario;
        document.getElementById("B39").style.backgroundColor = colorPrimario;
        document.getElementById("P39").style.backgroundColor = colorPrimario;
        document.getElementById("B40").style.backgroundColor = colorPrimario;
        document.getElementById("P40").style.backgroundColor = colorPrimario;

        document.getElementById("B41").style.backgroundColor = colorPrimario;
        document.getElementById("P41").style.backgroundColor = colorPrimario;
        document.getElementById("B42").style.backgroundColor = colorPrimario;
        document.getElementById("P42").style.backgroundColor = colorPrimario;
        document.getElementById("B43").style.backgroundColor = colorPrimario;
        document.getElementById("P43").style.backgroundColor = colorPrimario;
        document.getElementById("B44").style.backgroundColor = colorPrimario;
        document.getElementById("P44").style.backgroundColor = colorPrimario;
        document.getElementById("B45").style.backgroundColor = colorPrimario;
        document.getElementById("P45").style.backgroundColor = colorPrimario;
        document.getElementById("B46").style.backgroundColor = colorPrimario;
        document.getElementById("P46").style.backgroundColor = colorPrimario;
        document.getElementById("B47").style.backgroundColor = colorPrimario;
        document.getElementById("P47").style.backgroundColor = colorPrimario;
        document.getElementById("B48").style.backgroundColor = colorPrimario;
        document.getElementById("P48").style.backgroundColor = colorPrimario;
        document.getElementById("B49").style.backgroundColor = colorPrimario;
        document.getElementById("P49").style.backgroundColor = colorPrimario;
        document.getElementById("B50").style.backgroundColor = colorPrimario;
        document.getElementById("P50").style.backgroundColor = colorPrimario;

        document.getElementById("B51").style.backgroundColor = colorPrimario;
        document.getElementById("P51").style.backgroundColor = colorPrimario;
        document.getElementById("B52").style.backgroundColor = colorPrimario;
        document.getElementById("P52").style.backgroundColor = colorPrimario;
        document.getElementById("B53").style.backgroundColor = colorPrimario;
        document.getElementById("P53").style.backgroundColor = colorPrimario;
        document.getElementById("B54").style.backgroundColor = colorPrimario;
        document.getElementById("P54").style.backgroundColor = colorPrimario;
        document.getElementById("B55").style.backgroundColor = colorPrimario;
        document.getElementById("P55").style.backgroundColor = colorPrimario;
        document.getElementById("B56").style.backgroundColor = colorPrimario;
        document.getElementById("P56").style.backgroundColor = colorPrimario;
        document.getElementById("B57").style.backgroundColor = colorPrimario;
        document.getElementById("P57").style.backgroundColor = colorPrimario;
        document.getElementById("B58").style.backgroundColor = colorPrimario;
        document.getElementById("P58").style.backgroundColor = colorPrimario;
        document.getElementById("B59").style.backgroundColor = colorPrimario;
        document.getElementById("P59").style.backgroundColor = colorPrimario;
        document.getElementById("B60").style.backgroundColor = colorPrimario;
        document.getElementById("P60").style.backgroundColor = colorPrimario;

        document.getElementById("B61").style.backgroundColor = colorPrimario;
        document.getElementById("P61").style.backgroundColor = colorPrimario;
        document.getElementById("B62").style.backgroundColor = colorPrimario;
        document.getElementById("P62").style.backgroundColor = colorPrimario;
        document.getElementById("B63").style.backgroundColor = colorPrimario;
        document.getElementById("P63").style.backgroundColor = colorPrimario;
        document.getElementById("B64").style.backgroundColor = colorPrimario;
        document.getElementById("P64").style.backgroundColor = colorPrimario;
        document.getElementById("B65").style.backgroundColor = colorPrimario;
        document.getElementById("P65").style.backgroundColor = colorPrimario;
        document.getElementById("B66").style.backgroundColor = colorPrimario;
        document.getElementById("P66").style.backgroundColor = colorPrimario;
        document.getElementById("B67").style.backgroundColor = colorPrimario;
        document.getElementById("P67").style.backgroundColor = colorPrimario;
        document.getElementById("B68").style.backgroundColor = colorPrimario;
        document.getElementById("P68").style.backgroundColor = colorPrimario;
        document.getElementById("B69").style.backgroundColor = colorPrimario;
        document.getElementById("P69").style.backgroundColor = colorPrimario;
        document.getElementById("B70").style.backgroundColor = colorPrimario;
        document.getElementById("P70").style.backgroundColor = colorPrimario;

        document.getElementById("B71").style.backgroundColor = colorPrimario;
        document.getElementById("P71").style.backgroundColor = colorPrimario;
        document.getElementById("B72").style.backgroundColor = colorPrimario;
        document.getElementById("P72").style.backgroundColor = colorPrimario;
        document.getElementById("B73").style.backgroundColor = colorPrimario;
        document.getElementById("P73").style.backgroundColor = colorPrimario;
        document.getElementById("B74").style.backgroundColor = colorPrimario;
        document.getElementById("P74").style.backgroundColor = colorPrimario;
        document.getElementById("B75").style.backgroundColor = colorPrimario;
        document.getElementById("P75").style.backgroundColor = colorPrimario;
        document.getElementById("B76").style.backgroundColor = colorPrimario;
        document.getElementById("P76").style.backgroundColor = colorPrimario;
        document.getElementById("B77").style.backgroundColor = colorPrimario;
        document.getElementById("P77").style.backgroundColor = colorPrimario;
        document.getElementById("B78").style.backgroundColor = colorPrimario;
        document.getElementById("P78").style.backgroundColor = colorPrimario;
        document.getElementById("B79").style.backgroundColor = colorPrimario;
        document.getElementById("P79").style.backgroundColor = colorPrimario;
        document.getElementById("B80").style.backgroundColor = colorPrimario;
        document.getElementById("P80").style.backgroundColor = colorPrimario;

        document.getElementById("B81").style.backgroundColor = colorPrimario;
        document.getElementById("P81").style.backgroundColor = colorPrimario;
        document.getElementById("B82").style.backgroundColor = colorPrimario;
        document.getElementById("P82").style.backgroundColor = colorPrimario;
        document.getElementById("B83").style.backgroundColor = colorPrimario;
        document.getElementById("P83").style.backgroundColor = colorPrimario;
        document.getElementById("B84").style.backgroundColor = colorPrimario;
        document.getElementById("P84").style.backgroundColor = colorPrimario;
        document.getElementById("B85").style.backgroundColor = colorPrimario;
        document.getElementById("P85").style.backgroundColor = colorPrimario;
        document.getElementById("B86").style.backgroundColor = colorPrimario;
        document.getElementById("P86").style.backgroundColor = colorPrimario;
        document.getElementById("B87").style.backgroundColor = colorPrimario;
        document.getElementById("P87").style.backgroundColor = colorPrimario;
        document.getElementById("B88").style.backgroundColor = colorPrimario;
        document.getElementById("P88").style.backgroundColor = colorPrimario;
        document.getElementById("B89").style.backgroundColor = colorPrimario;
        document.getElementById("P89").style.backgroundColor = colorPrimario;
        document.getElementById("B90").style.backgroundColor = colorPrimario;
        document.getElementById("P90").style.backgroundColor = colorPrimario;*/
    }
    else {
        alert("Seguimos jugando.")
    }
    
}