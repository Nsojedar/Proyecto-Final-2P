import ContactoForm from "./ContactoForm";

const NuevoContacto = ({ agregarContacto, onGuardado, mostrarAlerta }) => {
  const manejarSubmit = (contacto) => {
    agregarContacto(contacto);
    mostrarAlerta("¡Contacto creado con éxito!");
    onGuardado();
  };

  return (
    <ContactoForm 
      onSubmit={manejarSubmit} 
      textoBoton="Crear Contacto" 
    />
  );
};

export default NuevoContacto;
