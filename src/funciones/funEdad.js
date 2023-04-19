import esBisiesto from '../funciones/funBisiesto'

export default function edad(fDeNac)
{

  let inputDay = parseInt(fDeNac.day)
  let inputMonth = parseInt(fDeNac.month)
  let inputYear = parseInt(fDeNac.year)
  let hoy = new Date()
  let isOld = parseInt(hoy.getFullYear()) - inputYear - 1;
  let hasMonths = parseInt(hoy.getMonth()) + 1
  let hasDays = parseInt(hoy.getDate())
  let bisiesto = esBisiesto(hoy.getFullYear());
  let dia;
  let meses;
  let objMes={
    1:31,
    2:bisiesto?29:28,
    3:31,
    4:30,
    5:31,
    6:30,
    7:31,
    8:31,
    9:30,
    10:31,
    11:30,
    12:31
  }
  
  console.log(typeof inputDay)
  if(inputDay===30||inputDay===31){
    dia=hasDays;
    meses=(11- inputMonth) + (hasMonths);
    console.log(hasDays)
  }else if(inputDay > hasDays){
    dia= (( objMes[inputMonth-1] - inputDay) + hasDays);
    meses=(11- inputMonth) + (hasMonths)
  }else{
    dia= hasDays -inputDay ;
    meses=(12 - inputMonth) + (hasMonths)
  }
 


  if (dia == objMes[inputMonth-1]) {
    meses = meses + 1;
    dia = 0
  }

  if (meses >= 12) {
    isOld = isOld + 1;
    meses = meses - 12
  }
  let total = {
    year: isOld,
    month: meses,
    day: dia
  }
  
  console.log(fDeNac)
  return total
}




/*   if (bisiesto && hasMonths === 3 && inputDay > hasDays) {
    dia = ((29 - inputDay) + hasDays);
    meses = (11 - inputMonth) + (hasMonths)
  } else if (bisiesto && hasMonths === 3 && inputDay < hasDays) {
    dia = (hasDays - inputDay);
    meses = (12 - inputMonth) + (hasMonths)

  } else if (!bisiesto && hasMonths === 3 && inputDay > hasDays) {
    dia = ((28 - inputDay) + hasDays);
    meses = (11 - inputMonth) + (hasMonths)
  } else if (!bisiesto && hasMonths === 3 && inputDay < hasDays) {
    dia = (hasDays - inputDay);
    meses = (12 - inputMonth) + (hasMonths)
  }
  if (!mesLargo && inputDay >= hasDays || inputMonth == 8 && inputDay >= hasDays) {
    dia = ((31 - inputDay) + hasDays);
    meses = (11 - inputMonth) + (hasMonths)
  } else if (inputDay > hasDays) {
    dia = ((30 - inputDay) + hasDays);
    meses = (11 - inputMonth) + (hasMonths)
  } else if (inputDay <= hasDays) {
    dia = (hasDays - inputDay);
    meses = (12 - inputMonth) + (hasMonths)
  } */