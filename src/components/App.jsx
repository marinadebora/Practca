import { useState } from 'react'
import '../Styles/App.css'
import validation from '../funciones/funValidation.js'
import funEdad from '../funciones/funEdad.js'

function App()
{
  
 
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
    <div className="App">
        <div className='containLabel'><label>Dia</label>
          <label>Mes</label>
          <label >Año</label></div>
          <form onSubmit={handleSubmit}>
        <input type="number" name="day" id="dia" value={from.day} onChange={(e)=>handleChange(e)} />
        {errors.day && (<p /* className={style.p} */>{errors.day}</p>)}
        <input type="number" name="month" id="mes" value={from.month} onChange={(e)=>handleChange(e)} />
        {errors.month && (<p /* className={style.p} */>{errors.month}</p>)}
        <input type="number" name="year" id="año" value={from.year} onChange={(e)=>handleChange(e)} />
        {errors.year && (<p /* className={style.p} */>{errors.year}</p>)}
       {!from.year|| errors.day||errors.month|| errors.year?<button type="submit" disabled>✔</button>:<button type="submit">✔</button>}
        </form>
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

export default App
