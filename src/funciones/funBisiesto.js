export default function esBisiesto(year)
{
    let bisiesto = (year % 400 === 0) ? true :
        (year % 100 === 0) ? false :
            year % 4 === 0;
    return bisiesto
}