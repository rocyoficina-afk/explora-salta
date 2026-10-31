import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Inicio() {

  // Estados para guardar la información
  const [lugares, setLugares] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // Consultamos la API cuando se carga la página
  useEffect(() => {

    const obtenerLugares = async () => {

      try {

        const respuesta = await fetch(
          "https://es.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts%7Cpageimages&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=600&titles=Salta%7CCafayate%7CCachi"
        );

        if (!respuesta.ok) {
          throw new Error("No se pudo conectar con Wikipedia");
        }

        const datos = await respuesta.json();

        const paginas = Object.values(datos.query.pages);

        const resultados = paginas.map((pagina) => ({

          id: pagina.pageid,
          nombre: pagina.title,
          descripcion: pagina.extract || "Conocé este destino turístico de Salta.",
          imagen: pagina.thumbnail?.source ||
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600"

        }));

        setLugares(resultados);

      } catch (error) {

        setError("No se pudo cargar la información. Intentá nuevamente.");

      } finally {

        setCargando(false);

      }

    };

    obtenerLugares();

  }, []);

  return (
    <main>

      <section className="bienvenida">

        <div className="texto-bienvenida">

          <h2>Descubrí la magia de Salta</h2>

          <p>
            Explorá paisajes únicos, pueblos llenos de historia,
            cultura, gastronomía y experiencias inolvidables.
          </p>

          <Link to="/destinos" className="boton">
  Conocer destinos
</Link>

        </div>

        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1000"
          alt="Paisaje de montaña"
        />

      </section>

      <section className="destacados">

        <h2>Destinos destacados</h2>

        <p className="subtitulo">
          Información obtenida desde la API pública de Wikipedia.
        </p>

        {cargando && <p>Cargando destinos...</p>}

        {error && <p>{error}</p>}

        <div className="contenedor-tarjetas">

          {lugares.map((lugar) => (

            <article className="tarjeta" key={lugar.id}>

              <img src={lugar.imagen} alt={lugar.nombre} />

              <div className="contenido-tarjeta">

                <h3>{lugar.nombre}</h3>

                <p>{lugar.descripcion}</p>

              </div>

            </article>

          ))}

        </div>

      </section>

    </main>
  );

}

export default Inicio;