// Fecha

const fecha = new Date();
const hoy = fecha.getDate();
const mesActual = fecha.getMonth()+1;
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const año = fecha.getFullYear();

document.getElementById("mes").innerHTML = meses[mesActual-1];
document.getElementById("año").innerHTML = año;

// Api

const api = "https://calendarific.com/api/v2/holidays?&api_key=3c6e45413e7f08bd7d98b7fe21642609d891f1b7&country=AR&year=2022"

async function obtenerHoliday(){
    const response = await fetch(api)
    const data = await response.json()
    console.log(data);

    vacaciones = data.response.holidays

    function next_Hol(){
        var a = true;
        var pos;
        for (let i=0; i<vacaciones.length; i++){
            if(a){
                if (mesActual == vacaciones[i].date.datetime.month){
                    if (hoy <= vacaciones[i].date.datetime.day) { 
                        a = false;
                        pos = i;
                    }
                }
                else if (mesActual < vacaciones[i].date.datetime.month){
                    a = false;
                    pos = i;
                }
            }
        }
        return pos;
    }

    var posicion = next_Hol();
    document.getElementById("hol1").innerHTML = vacaciones[posicion].name;
    document.getElementById("hol2").innerHTML = vacaciones[posicion].date.iso;

    function buscarFeriados(vacaciones){ 
        var feriado;
        for(let j=0;j<vacaciones.length;j++){
            for (let i=0; i<31; i++){
                if (mesActual == vacaciones[j].date.datetime.month){
                    if (vacaciones[j].date.datetime.day == document.getElementById(dias_Id[i]).innerHTML) {
                        feriado = document.getElementById(dias_Id[i]);
                        feriado.className = 'marcar negative';
                        feriado.title = vacaciones[j].name;
                    }
                }
            }
        }

    }
    buscarFeriados(vacaciones);
}

obtenerHoliday()

// Estilos dias calendario

var dias_Id = ["day1","day2","day3","day4","day5","day6","day7","day8","day9","day10","day11","day12","day13","day14","day15","day16","day17","day18","day19","day20","day21","day22","day23","day24","day25","day26","day27","day28","day29","day30","day31",]
var dia;

function buscarDiaActual(dia){ 
    var diaActual;
    for (let i=0; i<31; i++){
        if (dia == document.getElementById(dias_Id[i]).innerHTML) {
            diaActual = document.getElementById(dias_Id[i]);
            diaActual.className = 'marcar active';
            diaActual.title = "Día actual";
        }
    }
}

buscarDiaActual(hoy);
