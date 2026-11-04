
import { HashRouter, Routes, Route } from "react-router-dom";

import Inicio from "./Paginas/Inicio";
import Destinos from "./Paginas/Destinos";
import Contacto from "./Paginas/Contacto";
import Menu from "./componentes/menu";
import Footer from "./componentes/Footer";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Menu />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/destinos" element={<Destinos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />

      </div>
    </HashRouter>
  );
}

export default App;
