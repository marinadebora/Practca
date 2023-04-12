export default function validation(from) 
{
  let errors = {}
  const today = new Date();
  const year = today.getFullYear();
  let mesLargo = [1, 3, 5, 7, 8, 10, 12]
  let mes;
  let esBisiesto;
  //errors.año =from.año < 0 || from.año>year? `el año debe estar entre 0 y ${year} `:""
  if(from.dia&& from.mes&&from.año){
    esBisiesto = (from.año % 400 === 0) ? true :
    (from.año % 100 === 0) ? false :
      from.año % 4 === 0;
console.log(esBisiesto)
      if(from.año<0 || from.año>year){
        errors.año = `el año debe estar entre 0 y ${year} `
      }

      if(from.mes < 0 || from.mes > 12){
        errors.mes = "los meses van de 1 a 12"
      }

      if (esBisiesto && from.mes == 2){
        if (from.dia < 0 ||from.dia > 29){
          errors.dia = "febrero tiene entre 1 y 29 dias"
        }
      }else if (from.mes ==2 ) {
        if( from.dia < 0 || from.dia > 28 ){
          errors.dia = "febrero tiene entre 1 y 28 dias"

        }
      }else{
        mes = (mesLargo.includes(parseInt(from.mes,10)))
        if (mes && from.dia < 0 || from.dia > 31) {
            errors.dia = "el mes tiene entre 1 y 31 dias"
          } else if (from.mes !== 2 && from.dia < 0 || from.dia > 30 ) {
            errors.dia = "el mes tiene entre 1 y 30 dias"
          }
      }
  }
  console.log(errors)
  return errors
}

