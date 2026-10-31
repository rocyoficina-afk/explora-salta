
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/Destinos">Destinos</Link>
      <Link to="/Contacto">contacto</Link>
    </nav>
  );
}

export default Menu;
