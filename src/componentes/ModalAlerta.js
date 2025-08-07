import React, { useEffect } from "react";

const ModalAlerta = ({ mensaje, mostrar, duracion = 1000, onCerrar }) => {
  useEffect(() => {
    if (mostrar) {
      const timer = setTimeout(() => {
        onCerrar(); // aquí cerramos el modal
      }, duracion);

      return () => clearTimeout(timer);
    }
  }, [mostrar, duracion, onCerrar]);

  if (!mostrar) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Mensaje</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onCerrar}
            ></button>
          </div>
          <div className="modal-body">
            <p>{mensaje}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAlerta;
