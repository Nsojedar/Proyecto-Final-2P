// FiltroOrdenacion.jsx
import React from "react";

const FiltroOrdenacion = ({
  busqueda,
  setBusqueda,
  orden,
  setOrden,
  letraInicial,
  setLetraInicial,
}) => {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Buscar por nombre o email..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
        <select
          className="form-select w-auto"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="asc">Nombre A-Z</option>
          <option value="desc">Nombre Z-A</option>
          <option value="reciente">Más recientes</option>
          <option value="antiguo">Más antiguos</option>
        </select>

        <div className="d-flex flex-wrap ms-3 mt-2 mt-md-0">
          {letras.map((letra) => (
            <button
              key={letra}
              className={`btn btn-sm m-1 ${
                letra === letraInicial ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() =>
                setLetraInicial(letra === letraInicial ? "" : letra)
              }
            >
              {letra}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FiltroOrdenacion;
