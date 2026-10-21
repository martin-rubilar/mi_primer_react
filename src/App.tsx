import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { About } from './page/About'

function Home() {
  return <h1>Inicio</h1>
}

function App() {
  return (
    <BrowserRouter>
      {/*Navegacion entre paginas sin recargar el navegador*/}
     
<nav>
  <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
</nav>

      {/* Definicion de la relacion URL -> componente */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
