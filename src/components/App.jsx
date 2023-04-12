import { useState } from 'react'
import '../Styles/App.css'
import validation from '../funciones/funValidation.js'



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
   
}/* calcular los meses y dias si el dia de cumpleaños
 es mayor al dia de hoy restar un mes y contar los dias */

   let hoy=new Date()
   let TieneEdad= parseInt(hoy.getFullYear())-edad.año -1;
   let tieneMeses= parseInt(hoy.getMonth())
   let tieneDias= parseInt(hoy.getDate())
  let total= {
    años: TieneEdad,
    meses:(12-edad.mes) + (tieneMeses),
    dias:tieneDias - edad.dia
  }

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
