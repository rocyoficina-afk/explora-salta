
import destinos from "../data/Destinos.js";

function Destinos() {
  return (
    <main>
      <h2>Descubrí los destinos de Salta</h2>

      <p className="subtitulo">
        Explorá lugares increíbles de nuestra provincia.
      </p>

      <div className="contenedor-tarjetas">
        {destinos.map((destino) => (
          <article className="tarjeta" key={destino.id}>
            <img
              src={destino.imagen}
              alt={destino.nombre}
            />

            <div className="contenido-tarjeta">
              <h3>{destino.nombre}</h3>
              <p>{destino.descripcion}</p>
              <p>
                <strong>Ubicación:</strong> {destino.ubicacion}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Destinos;
