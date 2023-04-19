import React,{ useState } from 'react'
import validation from '../funciones/funValidation.js'
import funEdad from '../funciones/funEdad.js'
import { Formulario,GrupoInput, Input, LeyendaError,IconValidacion,IconoError } from '../elementos/formulario.js'
import "../Styles/Edad.css"



const Edad = () => {
    
 
  const [from, setFrom] = useState({
    day: "",
    month: "",
    year: ""
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

     setEdad({
     ...from
     })
setFrom({
  day: "",
  month: "",
  year: ""
})
   
}
let total= funEdad(edad)
console.log(total)
  return (
   
        <div className='containLabel'>
          <Formulario onSubmit={handleSubmit} className="input-group">
            <div className="containerInput">
            <GrupoInput>
            <Input  className="form-control" type="number" name="day" id="dia" value={from.day}  onChange={(e)=>handleChange(e)} />
            {
              !errors.day?<IconValidacion>✔</IconValidacion>:<IconoError>❌</IconoError>
            }
            
            </GrupoInput>
        {errors.day? <LeyendaError className='error'>{errors.day}</LeyendaError>: <p className='error'></p> }
            </div>
            <div className="containerInput">
            <input className="form-control" type="number" name="month" id="mes" value={from.month} onChange={(e)=>handleChange(e)} />
        {errors.month? <p className='error'>{errors.month}</p>: <p className='error'></p> }
            </div>
            <div className="containerInput">
            <input className="form-control" type="number" name="year" id="año" value={from.year} onChange={(e)=>handleChange(e)} />
        {errors.year ? <p className='error'>{errors.year}</p>: <p className='error'></p> }
            </div>
        
        
        
       {!from.year|| errors.day||errors.month|| errors.year?<button type="submit" disabled>✔</button>:<button type="submit">✔</button>}
        </Formulario>
        <div className="print">
          {
            total.month==0&&total.day==0&&<p>Feliz cumple años </p>
           
          }
          {
            total.year?<p>Tienes {total.year} Años</p>: <p></p>
          }
         {
            total.month?<p>{total.month} meses</p>: <p></p>
         }
         {
           total.day?<p>y {total.day} dias</p>: <p></p>
         }
          
          
        </div>
    </div>
  )
}

export default Edad
