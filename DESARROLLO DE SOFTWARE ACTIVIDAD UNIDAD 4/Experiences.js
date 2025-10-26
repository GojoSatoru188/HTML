import React from 'react';

const Experiences = ({ experiences }) => {
  return (
    <div className="section animated slideInLeft">
      <h2 className="section-title"><i className="fas fa-briefcase"></i> EXPERIENCIA PROFESIONAL</h2>
      <div className="experiences-list">
        {experiences.length === 0 ? (
          <p>No hay experiencias profesionales registradas.</p>
        ) : (
          experiences.map((exp, index) => (
            <div key={exp._id || index} className="experience-item">
              <h3>{exp.cargo}</h3>
              <p className="company"><strong>Empresa:</strong> {exp.empresa}</p>
              <p className="period"><strong>Periodo:</strong> {exp.fechaInicio} - {exp.fechaFin || 'Actual'}</p>
              {exp.descripcion && <p className="description">{exp.descripcion}</p>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Experiences;