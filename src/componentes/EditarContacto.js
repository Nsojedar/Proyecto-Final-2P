import React from "react";
import ContactoForm from "./ContactoForm";

const EditarContacto = ({
  contacto,
  actualizarContacto,
  onGuardado,
  mostrarAlerta,
}) => {
  const manejarSubmit = (contactoEditado) => {
    actualizarContacto(contactoEditado);
    mostrarAlerta("¡Contacto actualizado con éxito!");
    onGuardado();
  };

  return (
    <ContactoForm
      contactoInicial={contacto}
      onSubmit={manejarSubmit}
      textoBoton="Guardar Cambios"
    />
  );
};

export default EditarContacto;
