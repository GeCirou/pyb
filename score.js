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
    bancas += 1;
    pases += 1;

    let count = "B" + pases;

    historial.push(1);

    document.getElementById("label_banca").innerHTML = bancas;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById(count).style.backgroundColor = "#000";
}
function puntoGana() {
    puntos += 1;
    pases += 1;

    let count = "P" + pases;

    historial.push(2);

    document.getElementById("label_punto").innerHTML = puntos;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById(count).style.backgroundColor = "#000";
}
function ancarDio() {
    ancares += 1;
    pases += 1;

    let countB = "B" + pases;
    let countP = "P" + pases;

    historial.push(3);

    document.getElementById("label_ancar").innerHTML = ancares;
    document.getElementById("label_pase").innerHTML = pases;
    document.getElementById(countB).style.backgroundColor = "#000";
    document.getElementById(countP).style.backgroundColor = "#000";
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
            document.getElementById(count).style.backgroundColor = "#fff";
        }
        else if (historial[historial.length-1] == 2){
            let count = "P" + pases;
    
            puntos -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_punto").innerHTML = puntos;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(count).style.backgroundColor = "#fff";
        }
        else if (historial[historial.length-1] == 3){
            let countB = "B" + pases;
            let countP = "P" + pases;
    
            ancares -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_ancar").innerHTML = ancares;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(countB).style.backgroundColor = "#fff";
            document.getElementById(countP).style.backgroundColor = "#fff";
        }
    }
    else {
        alert("aún no pasó nada")
    }
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
    document.getElementById("B7").style.backgroundColor = "#fff";
    document.getElementById("P7").style.backgroundColor = "#fff";
    document.getElementById("B8").style.backgroundColor = "#fff";
    document.getElementById("P8").style.backgroundColor = "#fff";
    document.getElementById("B9").style.backgroundColor = "#fff";
    document.getElementById("P9").style.backgroundColor = "#fff";
    document.getElementById("B10").style.backgroundColor = "#fff";
    document.getElementById("P10").style.backgroundColor = "#fff";

    document.getElementById("B11").style.backgroundColor = "#fff";
    document.getElementById("P11").style.backgroundColor = "#fff";
    document.getElementById("B12").style.backgroundColor = "#fff";
    document.getElementById("P12").style.backgroundColor = "#fff";
    document.getElementById("B13").style.backgroundColor = "#fff";
    document.getElementById("P13").style.backgroundColor = "#fff";
    document.getElementById("B14").style.backgroundColor = "#fff";
    document.getElementById("P14").style.backgroundColor = "#fff";
    document.getElementById("B15").style.backgroundColor = "#fff";
    document.getElementById("P15").style.backgroundColor = "#fff";
    document.getElementById("B16").style.backgroundColor = "#fff";
    document.getElementById("P16").style.backgroundColor = "#fff";
    document.getElementById("B17").style.backgroundColor = "#fff";
    document.getElementById("P17").style.backgroundColor = "#fff";
    document.getElementById("B18").style.backgroundColor = "#fff";
    document.getElementById("P18").style.backgroundColor = "#fff";
    document.getElementById("B19").style.backgroundColor = "#fff";
    document.getElementById("P19").style.backgroundColor = "#fff";
    document.getElementById("B20").style.backgroundColor = "#fff";
    document.getElementById("P20").style.backgroundColor = "#fff";

    document.getElementById("B21").style.backgroundColor = "#fff";
    document.getElementById("P21").style.backgroundColor = "#fff";
    document.getElementById("B22").style.backgroundColor = "#fff";
    document.getElementById("P22").style.backgroundColor = "#fff";
    document.getElementById("B23").style.backgroundColor = "#fff";
    document.getElementById("P23").style.backgroundColor = "#fff";
    document.getElementById("B24").style.backgroundColor = "#fff";
    document.getElementById("P24").style.backgroundColor = "#fff";
    document.getElementById("B25").style.backgroundColor = "#fff";
    document.getElementById("P25").style.backgroundColor = "#fff";
    document.getElementById("B26").style.backgroundColor = "#fff";
    document.getElementById("P26").style.backgroundColor = "#fff";
    document.getElementById("B27").style.backgroundColor = "#fff";
    document.getElementById("P27").style.backgroundColor = "#fff";
    document.getElementById("B28").style.backgroundColor = "#fff";
    document.getElementById("P28").style.backgroundColor = "#fff";
    document.getElementById("B29").style.backgroundColor = "#fff";
    document.getElementById("P29").style.backgroundColor = "#fff";
    document.getElementById("B30").style.backgroundColor = "#fff";
    document.getElementById("P30").style.backgroundColor = "#fff";

    document.getElementById("B31").style.backgroundColor = "#fff";
    document.getElementById("P31").style.backgroundColor = "#fff";
    document.getElementById("B32").style.backgroundColor = "#fff";
    document.getElementById("P32").style.backgroundColor = "#fff";
    document.getElementById("B33").style.backgroundColor = "#fff";
    document.getElementById("P33").style.backgroundColor = "#fff";
    document.getElementById("B34").style.backgroundColor = "#fff";
    document.getElementById("P34").style.backgroundColor = "#fff";
    document.getElementById("B35").style.backgroundColor = "#fff";
    document.getElementById("P35").style.backgroundColor = "#fff";
    document.getElementById("B36").style.backgroundColor = "#fff";
    document.getElementById("P36").style.backgroundColor = "#fff";
    document.getElementById("B37").style.backgroundColor = "#fff";
    document.getElementById("P37").style.backgroundColor = "#fff";
    document.getElementById("B38").style.backgroundColor = "#fff";
    document.getElementById("P38").style.backgroundColor = "#fff";
    document.getElementById("B39").style.backgroundColor = "#fff";
    document.getElementById("P39").style.backgroundColor = "#fff";
    document.getElementById("B40").style.backgroundColor = "#fff";
    document.getElementById("P40").style.backgroundColor = "#fff";

    document.getElementById("B41").style.backgroundColor = "#fff";
    document.getElementById("P41").style.backgroundColor = "#fff";
    document.getElementById("B42").style.backgroundColor = "#fff";
    document.getElementById("P42").style.backgroundColor = "#fff";
    document.getElementById("B43").style.backgroundColor = "#fff";
    document.getElementById("P43").style.backgroundColor = "#fff";
    document.getElementById("B44").style.backgroundColor = "#fff";
    document.getElementById("P44").style.backgroundColor = "#fff";
    document.getElementById("B45").style.backgroundColor = "#fff";
    document.getElementById("P45").style.backgroundColor = "#fff";
    document.getElementById("B46").style.backgroundColor = "#fff";
    document.getElementById("P46").style.backgroundColor = "#fff";
    document.getElementById("B47").style.backgroundColor = "#fff";
    document.getElementById("P47").style.backgroundColor = "#fff";
    document.getElementById("B48").style.backgroundColor = "#fff";
    document.getElementById("P48").style.backgroundColor = "#fff";
    document.getElementById("B49").style.backgroundColor = "#fff";
    document.getElementById("P49").style.backgroundColor = "#fff";
    document.getElementById("B50").style.backgroundColor = "#fff";
    document.getElementById("P50").style.backgroundColor = "#fff";

    document.getElementById("B51").style.backgroundColor = "#fff";
    document.getElementById("P51").style.backgroundColor = "#fff";
    document.getElementById("B52").style.backgroundColor = "#fff";
    document.getElementById("P52").style.backgroundColor = "#fff";
    document.getElementById("B53").style.backgroundColor = "#fff";
    document.getElementById("P53").style.backgroundColor = "#fff";
    document.getElementById("B54").style.backgroundColor = "#fff";
    document.getElementById("P54").style.backgroundColor = "#fff";
    document.getElementById("B55").style.backgroundColor = "#fff";
    document.getElementById("P55").style.backgroundColor = "#fff";
    document.getElementById("B56").style.backgroundColor = "#fff";
    document.getElementById("P56").style.backgroundColor = "#fff";
    document.getElementById("B57").style.backgroundColor = "#fff";
    document.getElementById("P57").style.backgroundColor = "#fff";
    document.getElementById("B58").style.backgroundColor = "#fff";
    document.getElementById("P58").style.backgroundColor = "#fff";
    document.getElementById("B59").style.backgroundColor = "#fff";
    document.getElementById("P59").style.backgroundColor = "#fff";
    document.getElementById("B60").style.backgroundColor = "#fff";
    document.getElementById("P60").style.backgroundColor = "#fff";

    document.getElementById("B61").style.backgroundColor = "#fff";
    document.getElementById("P61").style.backgroundColor = "#fff";
    document.getElementById("B62").style.backgroundColor = "#fff";
    document.getElementById("P62").style.backgroundColor = "#fff";
    document.getElementById("B63").style.backgroundColor = "#fff";
    document.getElementById("P63").style.backgroundColor = "#fff";
    document.getElementById("B64").style.backgroundColor = "#fff";
    document.getElementById("P64").style.backgroundColor = "#fff";
    document.getElementById("B65").style.backgroundColor = "#fff";
    document.getElementById("P65").style.backgroundColor = "#fff";
    document.getElementById("B66").style.backgroundColor = "#fff";
    document.getElementById("P66").style.backgroundColor = "#fff";
    document.getElementById("B67").style.backgroundColor = "#fff";
    document.getElementById("P67").style.backgroundColor = "#fff";
    document.getElementById("B68").style.backgroundColor = "#fff";
    document.getElementById("P68").style.backgroundColor = "#fff";
    document.getElementById("B69").style.backgroundColor = "#fff";
    document.getElementById("P69").style.backgroundColor = "#fff";
    document.getElementById("B70").style.backgroundColor = "#fff";
    document.getElementById("P70").style.backgroundColor = "#fff";

    document.getElementById("B71").style.backgroundColor = "#fff";
    document.getElementById("P71").style.backgroundColor = "#fff";
    document.getElementById("B72").style.backgroundColor = "#fff";
    document.getElementById("P72").style.backgroundColor = "#fff";
    document.getElementById("B73").style.backgroundColor = "#fff";
    document.getElementById("P73").style.backgroundColor = "#fff";
    document.getElementById("B74").style.backgroundColor = "#fff";
    document.getElementById("P74").style.backgroundColor = "#fff";
    document.getElementById("B75").style.backgroundColor = "#fff";
    document.getElementById("P75").style.backgroundColor = "#fff";
    document.getElementById("B76").style.backgroundColor = "#fff";
    document.getElementById("P76").style.backgroundColor = "#fff";
    document.getElementById("B77").style.backgroundColor = "#fff";
    document.getElementById("P77").style.backgroundColor = "#fff";
    document.getElementById("B78").style.backgroundColor = "#fff";
    document.getElementById("P78").style.backgroundColor = "#fff";
    document.getElementById("B79").style.backgroundColor = "#fff";
    document.getElementById("P79").style.backgroundColor = "#fff";
    document.getElementById("B80").style.backgroundColor = "#fff";
    document.getElementById("P80").style.backgroundColor = "#fff";

    document.getElementById("B81").style.backgroundColor = "#fff";
    document.getElementById("P81").style.backgroundColor = "#fff";
    document.getElementById("B82").style.backgroundColor = "#fff";
    document.getElementById("P82").style.backgroundColor = "#fff";
    document.getElementById("B83").style.backgroundColor = "#fff";
    document.getElementById("P83").style.backgroundColor = "#fff";
    document.getElementById("B84").style.backgroundColor = "#fff";
    document.getElementById("P84").style.backgroundColor = "#fff";
    document.getElementById("B85").style.backgroundColor = "#fff";
    document.getElementById("P85").style.backgroundColor = "#fff";
    document.getElementById("B86").style.backgroundColor = "#fff";
    document.getElementById("P86").style.backgroundColor = "#fff";
    document.getElementById("B87").style.backgroundColor = "#fff";
    document.getElementById("P87").style.backgroundColor = "#fff";
    document.getElementById("B88").style.backgroundColor = "#fff";
    document.getElementById("P88").style.backgroundColor = "#fff";
    document.getElementById("B89").style.backgroundColor = "#fff";
    document.getElementById("P89").style.backgroundColor = "#fff";
    document.getElementById("B90").style.backgroundColor = "#fff";
    document.getElementById("P90").style.backgroundColor = "#fff";
}