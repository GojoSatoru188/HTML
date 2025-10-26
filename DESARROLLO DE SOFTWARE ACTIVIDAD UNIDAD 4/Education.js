import React from 'react';

const Education = () => {
  return (
    <div className="section animated slideInLeft">
      <h2 className="section-title"><i className="fas fa-graduation-cap"></i> FORMACIÓN ACADÉMICA</h2>
      <div className="education">
        <div className="education-item">
          <h3>Bachillerato Académico</h3>
          <p><strong>Institución:</strong> Institucion Educativa Normal Superior Montes de Maria</p>
          <span className="year">2023</span>
        </div>
        <div className="education-item">
          <h3>Carrera Ingenieria en software</h3>
          <p><strong>Institución:</strong> Universidad de Cartagena (En curso)</p>
          <span className="year">Actualidad</span>
        </div>
      </div>
    </div>
  );
};

export default Education;