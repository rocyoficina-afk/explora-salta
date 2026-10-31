import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./componentes/menu.jsx";
import Inicio from "./Paginas/Inicio.jsx";
import Destinos from "./Paginas/Destinos.jsx";
import Contacto from "./Paginas/Contacto.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>EXPLORÁ SALTA</h1>
        <p>Descubrí los paisajes de nuestra provincia</p>
      </header>

      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Destinos" element={<Destinos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
