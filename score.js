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
        let countButton = "NB" + pases;

        historial.push(1);

        document.getElementById("label_banca").innerHTML = bancas;
        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById(count).style.backgroundColor = colorCheck;
        document.getElementById(countButton).style.backgroundColor = colorCheck;
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
        let countButton = "NP" + pases;

        historial.push(2);

        document.getElementById("label_punto").innerHTML = puntos;
        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById(count).style.backgroundColor = colorCheck;
        document.getElementById(countButton).style.backgroundColor = colorCheck;
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
        let countButtonB = "NB" + pases;
        let countButtonP = "NP" + pases;

        historial.push(3);

        document.getElementById("label_ancar").innerHTML = ancares;
        document.getElementById("label_pase").innerHTML = pases;
        document.getElementById(countB).style.backgroundColor = colorCheck;
        document.getElementById(countP).style.backgroundColor = colorCheck;
        document.getElementById(countButtonB).style.backgroundColor = colorCheck;
        document.getElementById(countButtonP).style.backgroundColor = colorCheck;
    }
    else {
        alert("No hay más espacio.")
    }
}

// NUMEROS TABLA
function numeroP1() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP1").innerHTML = num;
}
function numeroB1() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB1").innerHTML = num;
}
function numeroP31() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP31").innerHTML = num;
}
function numeroB31() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB31").innerHTML = num;
}
function numeroP61() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP61").innerHTML = num;
}
function numeroB61() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB61").innerHTML = num;
}

function numeroP2() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP2").innerHTML = num;
}
function numeroB2() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB2").innerHTML = num;
}
function numeroP32() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP32").innerHTML = num;
}
function numeroB32() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB32").innerHTML = num;
}
function numeroP62() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP62").innerHTML = num;
}
function numeroB62() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB62").innerHTML = num;
}

function numeroP3() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP3").innerHTML = num;
}
function numeroB3() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB3").innerHTML = num;
}
function numeroP33() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP33").innerHTML = num;
}
function numeroB33() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB33").innerHTML = num;
}
function numeroP63() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP63").innerHTML = num;
}
function numeroB63() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB63").innerHTML = num;
}

function numeroP4() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP4").innerHTML = num;
}
function numeroB4() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB4").innerHTML = num;
}
function numeroP34() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP34").innerHTML = num;
}
function numeroB34() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB34").innerHTML = num;
}
function numeroP64() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP64").innerHTML = num;
}
function numeroB64() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB64").innerHTML = num;
}

function numeroP5() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP5").innerHTML = num;
}
function numeroB5() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB5").innerHTML = num;
}
function numeroP35() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP35").innerHTML = num;
}
function numeroB35() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB35").innerHTML = num;
}
function numeroP65() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP65").innerHTML = num;
}
function numeroB65() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB65").innerHTML = num;
}

function numeroP6() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP6").innerHTML = num;
}
function numeroB6() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB6").innerHTML = num;
}
function numeroP36() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP36").innerHTML = num;
}
function numeroB36() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB36").innerHTML = num;
}
function numeroP66() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP66").innerHTML = num;
}
function numeroB66() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB66").innerHTML = num;
}

function numeroP7() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP7").innerHTML = num;
}
function numeroB7() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB7").innerHTML = num;
}
function numeroP37() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP37").innerHTML = num;
}
function numeroB37() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB37").innerHTML = num;
}
function numeroP67() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP67").innerHTML = num;
}
function numeroB67() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB67").innerHTML = num;
}

function numeroP8() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP8").innerHTML = num;
}
function numeroB8() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB8").innerHTML = num;
}
function numeroP38() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP38").innerHTML = num;
}
function numeroB38() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB38").innerHTML = num;
}
function numeroP68() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP68").innerHTML = num;
}
function numeroB68() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB68").innerHTML = num;
}

function numeroP9() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP9").innerHTML = num;
}
function numeroB9() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB9").innerHTML = num;
}
function numeroP39() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP39").innerHTML = num;
}
function numeroB39() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB39").innerHTML = num;
}
function numeroP69() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP69").innerHTML = num;
}
function numeroB69() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB69").innerHTML = num;
}

function numeroP10() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP10").innerHTML = num;
}
function numeroB10() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB10").innerHTML = num;
}
function numeroP40() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP40").innerHTML = num;
}
function numeroB40() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB40").innerHTML = num;
}
function numeroP70() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP70").innerHTML = num;
}
function numeroB70() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB70").innerHTML = num;
}

function numeroP11() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP11").innerHTML = num;
}
function numeroB11() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB11").innerHTML = num;
}
function numeroP41() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP41").innerHTML = num;
}
function numeroB41() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB41").innerHTML = num;
}
function numeroP71() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP71").innerHTML = num;
}
function numeroB71() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB71").innerHTML = num;
}

function numeroP12() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP12").innerHTML = num;
}
function numeroB12() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB12").innerHTML = num;
}
function numeroP42() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP42").innerHTML = num;
}
function numeroB42() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB42").innerHTML = num;
}
function numeroP72() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP72").innerHTML = num;
}
function numeroB72() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB72").innerHTML = num;
}

function numeroP13() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP13").innerHTML = num;
}
function numeroB13() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB13").innerHTML = num;
}
function numeroP43() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP43").innerHTML = num;
}
function numeroB43() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB43").innerHTML = num;
}
function numeroP73() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP73").innerHTML = num;
}
function numeroB73() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB73").innerHTML = num;
}

function numeroP14() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP14").innerHTML = num;
}
function numeroB14() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB14").innerHTML = num;
}
function numeroP44() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP44").innerHTML = num;
}
function numeroB44() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB44").innerHTML = num;
}
function numeroP74() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP74").innerHTML = num;
}
function numeroB74() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB74").innerHTML = num;
}

function numeroP15() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP15").innerHTML = num;
}
function numeroB15() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB15").innerHTML = num;
}
function numeroP45() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP45").innerHTML = num;
}
function numeroB45() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB45").innerHTML = num;
}
function numeroP75() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP75").innerHTML = num;
}
function numeroB75() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB75").innerHTML = num;
}

function numeroP16() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP16").innerHTML = num;
}
function numeroB16() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB16").innerHTML = num;
}
function numeroP46() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP46").innerHTML = num;
}
function numeroB46() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB46").innerHTML = num;
}
function numeroP76() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP76").innerHTML = num;
}
function numeroB76() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB76").innerHTML = num;
}

function numeroP17() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP17").innerHTML = num;
}
function numeroB17() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB17").innerHTML = num;
}
function numeroP47() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP47").innerHTML = num;
}
function numeroB47() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB47").innerHTML = num;
}
function numeroP77() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP77").innerHTML = num;
}
function numeroB77() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB77").innerHTML = num;
}

function numeroP18() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP18").innerHTML = num;
}
function numeroB18() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB18").innerHTML = num;
}
function numeroP48() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP48").innerHTML = num;
}
function numeroB48() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB48").innerHTML = num;
}
function numeroP78() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP78").innerHTML = num;
}
function numeroB78() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB78").innerHTML = num;
}

function numeroP19() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP19").innerHTML = num;
}
function numeroB19() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB19").innerHTML = num;
}
function numeroP49() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP49").innerHTML = num;
}
function numeroB49() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB49").innerHTML = num;
}
function numeroP79() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP79").innerHTML = num;
}
function numeroB79() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB79").innerHTML = num;
}

function numeroP20() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP20").innerHTML = num;
}
function numeroB20() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB20").innerHTML = num;
}
function numeroP50() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP50").innerHTML = num;
}
function numeroB50() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB50").innerHTML = num;
}
function numeroP80() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP80").innerHTML = num;
}
function numeroB80() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB80").innerHTML = num;
}

function numeroP21() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP21").innerHTML = num;
}
function numeroB21() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB21").innerHTML = num;
}
function numeroP51() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP51").innerHTML = num;
}
function numeroB51() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB51").innerHTML = num;
}
function numeroP81() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP81").innerHTML = num;
}
function numeroB81() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB81").innerHTML = num;
}

function numeroP22() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP22").innerHTML = num;
}
function numeroB22() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB22").innerHTML = num;
}
function numeroP52() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP52").innerHTML = num;
}
function numeroB52() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB52").innerHTML = num;
}
function numeroP82() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP82").innerHTML = num;
}
function numeroB82() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB82").innerHTML = num;
}

function numeroP23() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP23").innerHTML = num;
}
function numeroB23() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB23").innerHTML = num;
}
function numeroP53() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP53").innerHTML = num;
}
function numeroB53() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB53").innerHTML = num;
}
function numeroP83() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP83").innerHTML = num;
}
function numeroB83() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB83").innerHTML = num;
}

function numeroP24() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP24").innerHTML = num;
}
function numeroB24() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB24").innerHTML = num;
}
function numeroP54() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP54").innerHTML = num;
}
function numeroB54() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB54").innerHTML = num;
}
function numeroP84() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP84").innerHTML = num;
}
function numeroB84() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB84").innerHTML = num;
}

function numeroP25() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP25").innerHTML = num;
}
function numeroB25() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB25").innerHTML = num;
}
function numeroP55() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP55").innerHTML = num;
}
function numeroB55() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB55").innerHTML = num;
}
function numeroP85() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP85").innerHTML = num;
}
function numeroB85() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB85").innerHTML = num;
}

function numeroP26() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP26").innerHTML = num;
}
function numeroB26() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB26").innerHTML = num;
}
function numeroP56() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP56").innerHTML = num;
}
function numeroB56() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB56").innerHTML = num;
}
function numeroP86() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP86").innerHTML = num;
}
function numeroB86() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB86").innerHTML = num;
}

function numeroP27() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP27").innerHTML = num;
}
function numeroB27() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB27").innerHTML = num;
}
function numeroP57() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP57").innerHTML = num;
}
function numeroB57() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB57").innerHTML = num;
}
function numeroP87() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP87").innerHTML = num;
}
function numeroB87() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB87").innerHTML = num;
}

function numeroP28() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP28").innerHTML = num;
}
function numeroB28() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB28").innerHTML = num;
}
function numeroP58() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP58").innerHTML = num;
}
function numeroB58() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB58").innerHTML = num;
}
function numeroP88() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP88").innerHTML = num;
}
function numeroB88() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB88").innerHTML = num;
}

function numeroP29() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP29").innerHTML = num;
}
function numeroB29() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB29").innerHTML = num;
}
function numeroP59() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP59").innerHTML = num;
}
function numeroB59() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB59").innerHTML = num;
}
function numeroP89() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP89").innerHTML = num;
}
function numeroB89() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB89").innerHTML = num;
}

function numeroP30() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP30").innerHTML = num;
}
function numeroB30() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB30").innerHTML = num;
}
function numeroP60() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP60").innerHTML = num;
}
function numeroB60() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB60").innerHTML = num;
}
function numeroP90() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNP90").innerHTML = num;
}
function numeroB90() {
    let num = prompt("¿resultado?");
    document.getElementById("labelNB90").innerHTML = num;
}

// PAUTAS, REGLAMENTO DE NAIPES Y AYUDA
// function instrucciones() {
//     alert('Aquí van instrucciones para el público.');
// }

function naipes() {
    alert('Tabla para el punto\n\n 0, 1, 2, 3, 4 - PIDE carta.\n 5 - A Voluntad.\n 6, 7 - PLANTA.\n 8, 9 - Pase definido.\n\n Tabla para la banca\n\n Teniendo 0, 1, 2 - PIDE carta.\n Teniendo 3 - PLANTA con 8.\n Teniendo 4 - PLANTA con 1, 8, 9, 0.\n Teniendo 5 - PLANTA con 1, 2, 3, 8, 9, 0.\n Teniendo 6 - PIDE carta con 6, 7.\n Teniendo 7 - PLANTA.\n Teniendo 8, 9 - Pase definido.\n\n Teniendo 5 la banca  y habiendo plantado el punto, la banca PIDE carta.');
}

function ayuda() {
    alert('El objetivo de esta app es apuntar los pases de un sabot de Punto y Banca, no guardando estos registros.\n\n Esta app permite marcar la suerte ganadora de cada pase utilizando los botones que se encuentran a la derecha, estos pases son registrados de manera secuencial, sin poder saltear un pase.\n\n Presionando en las celdas de la tabla, se tendrá la posibilidad de anotar el puntaje de ambas suertes.\n\n El botón "Back" permite retroceder un pase, borrando la información anotada.\n El botón "Reset" elimina toda la información registrada.\n\n El botón "Reglas" da acceso al Reglamento de Naipes que se aplica durante la partida.')
}

// BACK Y RESET
function volver() {
    if (pases > 0){
        if (historial[historial.length-1] == 1){
            let count = "B" + pases;
            let countButton = "NB" + pases;
            let countLabel = "labelNB" + pases;
    
            bancas -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_banca").innerHTML = bancas;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(count).style.backgroundColor = colorPrimario;
            document.getElementById(countButton).style.backgroundColor = colorPrimario;
            document.getElementById(countLabel).innerHTML = "";
        }
        else if (historial[historial.length-1] == 2){
            let count = "P" + pases;
            let countButton = "NP" + pases;
            let countLabel = "labelNP" + pases;
    
            puntos -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_punto").innerHTML = puntos;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(count).style.backgroundColor = colorPrimario;
            document.getElementById(countButton).style.backgroundColor = colorPrimario;
            document.getElementById(countLabel).innerHTML = "";
        }
        else if (historial[historial.length-1] == 3){
            let countB = "B" + pases;
            let countP = "P" + pases;
            let countButtonB = "NB" + pases;
            let countButtonP = "NP" + pases;
            let countLabelB = "labelNB" + pases;
            let countLabelP = "labelNP" + pases;
    
            ancares -= 1;
            pases -= 1;
    
            historial.splice(historial.length-1, 1);
    
            document.getElementById("label_ancar").innerHTML = ancares;
            document.getElementById("label_pase").innerHTML = pases;
            document.getElementById(countB).style.backgroundColor = colorPrimario;
            document.getElementById(countP).style.backgroundColor = colorPrimario;
            document.getElementById(countButtonB).style.backgroundColor = colorPrimario;
            document.getElementById(countButtonP).style.backgroundColor = colorPrimario;
            document.getElementById(countLabelB).innerHTML = "";
            document.getElementById(countLabelP).innerHTML = "";
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

            document.getElementById("B" + i).style.backgroundColor = colorPrimario;
            document.getElementById("P" + i).style.backgroundColor = colorPrimario;
            document.getElementById("NB" + i).style.backgroundColor = colorPrimario;
            document.getElementById("NP" + i).style.backgroundColor = colorPrimario;
            document.getElementById("labelNB" + i).innerHTML = "";
            document.getElementById("labelNP" + i).innerHTML = "";
        }

    }
    else {
        alert("Seguimos jugando.")
    }
    
}