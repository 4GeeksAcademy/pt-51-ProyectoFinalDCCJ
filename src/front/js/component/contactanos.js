import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormspark } from '@formspark/use-formspark';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/contactanos.css";
import "../../styles/color.css";

const Contactanos = () => {
  const FORMSPARK_FORM_ID = 'K70oKA4lE';
  const [submit] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formData.nombre || !formData.email || !formData.mensaje) {
        throw new Error('Todos los campos son obligatorios');
      }

      await submit(formData);

      toast.success('Formulario enviado correctamente!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        onClose: () => {
          // Utiliza setTimeout para realizar la redirección después de un breve tiempo
          setTimeout(() => navigate('/'), 1000);
        },
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      
      toast.error('Error al enviar el formulario. Verifica tus datos e intenta nuevamente.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="container justify-content-center m-5">
      
      <form onSubmit={handleSubmit}className="color2 rounded-3">
        <div className="color1 text-center rounded-3">
          <h5 className='color-text1'>Contacto</h5>
          </div>
          <div className="m-3">
          <label htmlFor="nombre" className="form-label color-text1">Nombre:</label>
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

        <div className="m-3">
          <label htmlFor="email" className="form-label color-text1">Correo electrónico:</label>
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

        <div className="m-3">
          <label htmlFor="mensaje" className="form-label color-text1">Mensaje:</label>
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
        <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-outline-light m-3">
          Enviar
        </button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Contactanos;