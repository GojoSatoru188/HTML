import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor ingresa tu nombre';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Por favor ingresa un correo válido';
    if (!formData.subject.trim()) newErrors.subject = 'Por favor ingresa un asunto';
    if (!formData.message.trim()) newErrors.message = 'Por favor ingresa un mensaje';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div className="section contact-form animated slideInBottom">
      <h2 className="form-title"><i className="fas fa-envelope"></i> Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre completo</label>
          <input type="text" id="name" className={`form-control ${errors.name ? 'error' : ''}`} 
                 value={formData.name} onChange={handleChange} placeholder="Tu nombre" />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" className={`form-control ${errors.email ? 'error' : ''}`} 
                 value={formData.email} onChange={handleChange} placeholder="tu.correo@ejemplo.com" />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Asunto</label>
          <input type="text" id="subject" className={`form-control ${errors.subject ? 'error' : ''}`} 
                 value={formData.subject} onChange={handleChange} placeholder="Asunto del mensaje" />
          {errors.subject && <div className="error-message">{errors.subject}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" className={`form-control ${errors.message ? 'error' : ''}`} 
                    value={formData.message} onChange={handleChange} placeholder="Escribe tu mensaje aquí..."></textarea>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        <button type="submit" className="btn"><i className="fas fa-paper-plane"></i> Enviar Mensaje</button>
        {success && <div className="success-message">¡Mensaje enviado con éxito! Te contactaré pronto.</div>}
      </form>
    </div>
  );
};

export default ContactForm;