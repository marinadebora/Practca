import esBisiesto from "./funBisiesto";
import mes from "./funMes";

export default function validation(from) 
{
  let errors = {}
  const today = new Date();
  const year = today.getFullYear();
  let meses= mes(from.mes);
  let bisiesto= esBisiesto(from.año)

  if(from.dia&& from.mes&&from.año){

      if(from.año<0 || from.año>year){
        errors.año = `el año debe estar entre 0 y ${year} `
      }

      if(from.mes < 0 || from.mes > 12){
        errors.mes = "los meses van de 1 a 12"
      }

      if (bisiesto && from.mes == 2){
        if (from.dia < 0 ||from.dia > 29){
          errors.dia = "febrero tiene entre 1 y 29 dias"
        }
      }else if (from.mes ==2 ) {
        if( from.dia < 0 || from.dia > 28 ){
          errors.dia = "febrero tiene entre 1 y 28 dias"

        }
      }else{
        if (meses && from.dia < 0 || from.dia > 31) {
            errors.dia = "el mes tiene entre 1 y 31 dias"
          } else if (from.mes !== 2 && from.dia < 0 || from.dia > 30 ) {
            errors.dia = "el mes tiene entre 1 y 30 dias"
          }
      }
  }
  console.log(errors)
  return errors
}

