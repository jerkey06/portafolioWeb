import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>NO DUDES EN CONTACTARME!</h3>
          <p>No dudes en ponerte en contacto conmigo. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.</p>
          <div className="contact-details">
            <div className="contact-item">
              <img src="/assets/svg/map-pin.svg" alt="Address" />
              <p>C. Valle Azul 101, INFONAVIT del Valle, 36322 San Francisco.</p>
            </div>
            <div className="contact-item">
              <img src="/assets/svg/mail.svg" alt="Email" />
              <p>ponceemiliano44@gmail.com</p>
            </div>
            <div className="contact-item">
              <img src="/assets/svg/phone.svg" alt="Phone" />
              <p>+476 101 2128</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><img src="/assets/svg/facebook.svg" alt="Facebook" /></a>
            <a href="#" aria-label="Twitter"><img src="/assets/svg/twitter.svg" alt="Twitter" /></a>
            <a href="#" aria-label="GitHub"><img src="/assets/svg/1github.svg" alt="GitHub" /></a>
            <a href="#" aria-label="LinkedIn"><img src="/assets/svg/linkedin.svg" alt="LinkedIn" /></a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.name}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            onChange={handleChange}
            value={formData.subject}
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            onChange={handleChange}
            value={formData.message}
            required
          ></textarea>
          <button type="submit" className="send-message-btn">
            ENVIAR
            <img src="/assets/svg/send.svg" alt="Send" className="send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;