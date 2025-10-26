import React from 'react';

const PersonalInfo = () => {
  return (
    <div className="section animated slideInLeft">
      <h2 className="section-title"><i className="fas fa-user"></i> DATOS PERSONALES</h2>
      <div className="personal-info">
        <div className="info-item"><strong>Nombres y Apellidos: </strong> Santiago Leones Tapias</div>
        <div className="info-item"><strong>Lugar y fecha de nacimiento: </strong> 06/01/2007</div>
        <div className="info-item"><strong>Cédula de Ciudadanía: </strong> 1050483399 de San Juan Nepomuceno, Bolivar</div>
        <div className="info-item"><strong>Sexo:</strong> Masculino</div>
        <div className="info-item"><strong>Estado Civil:</strong> Soltero</div>
        <div className="info-item"><strong>Dirección:</strong> CALLE 13 KRA 10 - 25. San Juan Nepomuceno, Bolivar</div>
        <div className="info-item"><strong>Teléfono:</strong> 3206329198</div>
        <div className="info-item"><strong>Correo electrónico:</strong> santiagoleonestapias@gmail.com</div>
      </div>
    </div>
  );
};

export default PersonalInfo;