import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState("");

  const enviarMensaje = async (e) => {
    e.preventDefault();

    setEstado("Enviando mensaje...");

    try {
      await emailjs.send(
        "service_zfra76p",
        "template_nstsoa6",
        {
          from_name: nombre,
          from_email: correo,
          message: mensaje
        },
        {
          publicKey: "iZ9YZlokpH_S-QzO1"
        }
      );

      setEstado("¡Mensaje enviado correctamente!");
      setNombre("");
      setCorreo("");
      setMensaje("");

    } catch (error) {
      setEstado("No se pudo enviar el mensaje. Revisá la configuración.");
      console.error(error);
    }
  };

  return (
    <main>
      <section className="contacto">

        <div className="formulario-contacto">
          <h2>Contactanos</h2>

          <p>
            ¿Querés conocer más sobre los destinos turísticos de Salta?
            Escribinos.
          </p>

          <form onSubmit={enviarMensaje}>
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <label>Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />

            <label>Mensaje</label>
            <textarea
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />

            <button type="submit" className="boton">
              Enviar mensaje
            </button>
          </form>

          <p>{estado}</p>
        </div>

        <div className="mapa">
          <h3>Encontranos en Salta</h3>

          <iframe
            src="https://www.google.com/maps?q=Salta%20Argentina&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            title="Mapa de Salta"
          ></iframe>
        </div>

      </section>
    </main>
  );
}

export default Contacto;