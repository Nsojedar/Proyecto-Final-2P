const ModalConfirmacion = ({ contacto, onConfirmar, onCancelar }) => {
  if (!contacto) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
            <h5 className="modal-title">Confirmar Eliminación</h5>
            <button type="button" className="btn-close" onClick={onCancelar}></button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que deseas eliminar a <strong>{contacto.nombre}</strong>?</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onCancelar}>Cancelar</button>
            <button className="btn btn-danger" onClick={() => onConfirmar(contacto.id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacion;
