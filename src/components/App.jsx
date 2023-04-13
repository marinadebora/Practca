import { useState } from 'react'
import '../Styles/App.css'
import validation from '../funciones/funValidation.js'
import esBisiesto from '../funciones/funBisiesto'
import mes from '../funciones/funMes'

function App()
{
  
 
  const [from, setFrom] = useState({
    dia: "",
    mes: "",
    año: ""
  })
  const [errors,setErrors]=useState({})
  const [edad,setEdad]=useState({})

  const handleChange = (event) =>
  {
    setFrom({
      ...from,
      [event.target.name]: event.target.value
    })
    setErrors(validation({
      ...from,
      [event.target.name]: event.target.value
    }))
   
  }
 
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log( edad )

     setEdad({
     ...from
     })
setFrom({
  dia: "",
  mes: "",
  año: ""
})
   
}/* falta calcular cuando el mes tiene 31 dias o 30 dias */


  let bisiesto = esBisiesto(edad.año);
  let mesLargo=mes(edad.mes)
   let hoy=  new Date('March 17, 2023 03:24:00')
   let tieneEdad= parseInt(hoy.getFullYear())-edad.año -1;
   let tieneMeses= parseInt(hoy.getMonth())+1
   let tieneDias= parseInt(hoy.getDate())
  let dia;
  let meses;
   if(bisiesto&&tieneMeses==3&&edad.mes==3&&edad.dia>tieneDias){
    dia= (29-edad.dia) + tieneDias;
    meses=(11-edad.mes) + (tieneMeses)
   }else if(bisiesto&&tieneMeses==3&&edad.mes==3&&edad.dia<tieneDias){
    dia=  tieneDias- edad.dia;
    meses=(12-edad.mes) + (tieneMeses)
   
  }else if(!bisiesto&&tieneMeses==3&&edad.mes==3&&edad.dia>tieneDias){
    dia= (28-edad.dia) + tieneDias;
    meses=(11-edad.mes) + (tieneMeses)
   }else if(!bisiesto&&tieneMeses==3&&edad.mes==3&&edad.dia<tieneDias){
    dia=  tieneDias- edad.dia;
    meses=(12-edad.mes) + (tieneMeses)
  }
  if(meses===12){
   tieneEdad = tieneEdad+1;
   meses=0
 }

  let total= {
    años: tieneEdad,
    meses:meses,
    dias:dia
  }
console.log(tieneMeses)
  return (
    <div className="App">
        <div className='containLabel'><label>Dia</label>
          <label>Mes</label>
          <label >Año</label></div>
          <form onSubmit={handleSubmit}>
        <input type="number" name="dia" id="dia" value={from.dia} onChange={(e)=>handleChange(e)} />
        {errors.dia && (<p /* className={style.p} */>{errors.dia}</p>)}
        <input type="number" name="mes" id="mes" value={from.mes} onChange={(e)=>handleChange(e)} />
        {errors.mes && (<p /* className={style.p} */>{errors.mes}</p>)}
        <input type="number" name="año" id="año" value={from.año} onChange={(e)=>handleChange(e)} />
        {errors.año && (<p /* className={style.p} */>{errors.año}</p>)}
       { errors.dia||errors.me|| errors.año?<button type="submit" disabled>✔</button>:<button type="submit">✔</button>}
        </form>
        <div className="print">
          <p>Tienes {total.años} Años</p>
          <p>{total.meses} meses</p>
          <p>y {total.dias} dias</p>
        </div>
    </div>
  )
}

export default App
