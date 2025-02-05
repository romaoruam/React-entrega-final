import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center fw-bold">Contáctanos</h2>
      <p className="text-center lead">Déjanos tu mensaje y te responderemos a la brevedad.</p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label fw-bold">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Ingrese su email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label fw-bold">
                Mensaje
              </label>
              <textarea
                className="form-control"
                id="mensaje"
                name="mensaje"
                rows="4"
                placeholder="Escribe tu mensaje aquí..."
                required
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
