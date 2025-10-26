import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/experiencias';

const AdminPanel = ({ experiences, onExperienceUpdate }) => {
  const [formData, setFormData] = useState({ empresa: '', cargo: '', descripcion: '', fechaInicio: '', fechaFin: '' });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setFormData({ empresa: '', cargo: '', descripcion: '', fechaInicio: '', fechaFin: '' });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      resetForm();
      onExperienceUpdate();
    } catch (error) {
      console.error('Error saving experience:', error);
      alert('Error al guardar la experiencia');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (experience) => {
    setFormData({
      empresa: experience.empresa,
      cargo: experience.cargo,
      descripcion: experience.descripcion || '',
      fechaInicio: experience.fechaInicio,
      fechaFin: experience.fechaFin || ''
    });
    setEditingId(experience._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta experiencia?')) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        onExperienceUpdate();
      } catch (error) {
        console.error('Error deleting experience:', error);
        alert('Error al eliminar la experiencia');
      }
    }
  };

  return (
    <div className="admin-panel section">
      <h2 className="section-title"><i className="fas fa-cog"></i> PANEL ADMINISTRATIVO - GESTIÓN DE EXPERIENCIAS</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <h3>{editingId ? 'Editar Experiencia' : 'Agregar Nueva Experiencia'}</h3>
        <div className="form-row">
          <div className="form-group"><label>Empresa *</label><input type="text" name="empresa" value={formData.empresa} onChange={handleInputChange} required /></div>
          <div className="form-group"><label>Cargo *</label><input type="text" name="cargo" value={formData.cargo} onChange={handleInputChange} required /></div>
        </div>
        <div className="form-group"><label>Descripción</label><textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} rows="3" /></div>
        <div className="form-row">
          <div className="form-group"><label>Fecha Inicio *</label><input type="text" name="fechaInicio" value={formData.fechaInicio} onChange={handleInputChange} placeholder="Ej: Enero 2023" required /></div>
          <div className="form-group"><label>Fecha Fin</label><input type="text" name="fechaFin" value={formData.fechaFin} onChange={handleInputChange} placeholder="Ej: Actual" /></div>
        </div>
        <div className="form-actions">
          <button type="submit" disabled={loading} className="btn btn-save">{loading ? 'Guardando...' : (editingId ? 'Actualizar' : 'Guardar')}</button>
          {editingId && <button type="button" onClick={resetForm} className="btn btn-cancel">Cancelar</button>}
        </div>
      </form>
      <div className="experiences-admin">
        <h3>Experiencias Existentes ({experiences.length})</h3>
        {experiences.map(exp => (
          <div key={exp._id} className="admin-experience-item">
            <div className="experience-content">
              <h4>{exp.cargo}</h4>
              <p><strong>Empresa:</strong> {exp.empresa}</p>
              <p><strong>Periodo:</strong> {exp.fechaInicio} - {exp.fechaFin || 'Actual'}</p>
              {exp.descripcion && <p>{exp.descripcion}</p>}
            </div>
            <div className="experience-actions">
              <button onClick={() => handleEdit(exp)} className="btn-edit"><i className="fas fa-edit"></i> Editar</button>
              <button onClick={() => handleDelete(exp._id)} className="btn-delete"><i className="fas fa-trash"></i> Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;