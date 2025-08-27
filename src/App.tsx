import './App.css'
import Contador from './pages/contador/Contador'
import Home from './pages/home/Home'

function App() {

  return (
    <>
        <Home 
        titulo='Componente Home'
        texto='Esse é o componente Home, que recebeu as props (as propriedades)'/>
        <br></br>
        <Contador />
    </>
  )
}

export default App
