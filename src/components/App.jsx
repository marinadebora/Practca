import {Routes, Route} from 'react-router-dom'
import Edad from './Edad'
import "../Styles/App.css"
function App()
{



  return (
    <div className="App">
    <Routes>
        <Route exact path= '/edad' element={<Edad />}/>
      
      </Routes>
    </div>
  )
}

export default App
