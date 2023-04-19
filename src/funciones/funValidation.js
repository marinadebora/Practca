import esBisiesto from "./funBisiesto";
import mes from "./funMes";

export default function validation(from) 
{
  let errors = {}
  const today = new Date();
  const years = today.getFullYear();
  let meses= mes(from.month);
  let bisiesto= esBisiesto(from.year)

  if(from.day&& from.month&&from.year){

      if(from.year<0 || from.year>years){
        errors.year = `el año debe estar entre 0 y ${years} `
      }

      if(from.month < 0 || from.month > 12){
        errors.month = "los meses van de 1 a 12"
      }

      if (bisiesto && from.month == 2){
        if (from.day < 0 ||from.day > 29){
          errors.day = "febrero tiene entre 1 y 29 dias"
        }
      }else if (from.month ==2 ) {
        if( from.day < 0 || from.day > 28 ){
          errors.day = "febrero tiene entre 1 y 28 dias"

        }
      }else{
        if (meses && from.day < 0 || from.day > 31) {
            errors.day = "el mes tiene entre 1 y 31 dias"
          } else if (!meses &&from.month !== 2 && from.day < 0 || !meses &&from.day > 30 ) {
            errors.day = "el mes tiene entre 1 y 30 dias"
          }else{
            errors={}
          }
      }
      
  }
  console.log(errors)
  console.log(meses)
  return errors
}

