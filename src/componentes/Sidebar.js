// src/componentes/Sidebar.js
import React from 'react';

const Sidebar = ({ onSeleccionarVista, vistaActual }) => {
  return (
    <div className="bg-light vh-100 p-3" style={{ width: '220px' }}>
      <h4>Menú</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button
            className={`btn btn-link nav-link ${vistaActual === 'home' ? 'fw-bold' : ''}`}
            onClick={() => onSeleccionarVista('home')}
          >
            Agenda
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`btn btn-link nav-link ${vistaActual === 'nuevo' ? 'fw-bold' : ''}`}
            onClick={() => onSeleccionarVista('nuevo')}
          >
            Nuevo Contacto
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
