import React, { useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';

const Contactanos = () => {
  const FORMSPARK_FORM_ID = 'K70oKA4lE'; // Reemplaza con tu ID real de Formspark

  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validación de datos
      if (!formData.nombre || !formData.email || !formData.mensaje) {
        throw new Error('Todos los campos son obligatorios');
      }

      

      // Enviar datos a Formspark
      await submit(formData);

      // Lógica adicional después de enviar el formulario, si es necesario.

      // Redirige a la página que deseas después de enviar el formulario.
      window.location.href = '/';
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Puedes mostrar un mensaje de error al usuario o realizar otras acciones según tus necesidades.
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea
            className="form-control"
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contactanos;