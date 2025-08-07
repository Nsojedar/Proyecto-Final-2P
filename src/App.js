import { useState, useEffect } from "react";
import ContactList from "./componentes/ContactList";
import Sidebar from "./componentes/Sidebar";
import useLocalStorage from "./hooks/useLocalStorage";
import ModalAlerta from "./componentes/ModalAlerta";
import NuevoContacto from "./componentes/NuevoContacto";
import EditarContacto from "./componentes/EditarContacto";
import ModalConfirmacion from "./componentes/ModalConfirmacion";

const App = () => {
  const [contactos, setContactos] = useLocalStorage("contactos", []);
  const [contactoEditando, setContactoEditando] = useState(null);
  const [contactoAEliminar, setContactoAEliminar] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [vista, setVista] = useState("home");

  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    document.body.className = modoOscuro ? "dark" : "light";
  }, [modoOscuro]);

  const mostrarAlerta = (texto) => {
    setMensaje(texto);
    setTimeout(() => setMensaje(""), 9000);
  };

  const agregarContacto = (nuevoContacto) => {
    const nuevoConId = { ...nuevoContacto, id: Date.now() };
    setContactos([...contactos, nuevoConId]);
  };

  const actualizarContacto = (contactoEditado) => {
    setContactos(
      contactos.map((c) => (c.id === contactoEditado.id ? contactoEditado : c))
    );
  };

  const confirmarEliminacion = (id) => {
    setContactos(contactos.filter((c) => c.id !== id));
    mostrarAlerta("¡Contacto eliminado!");
    setContactoAEliminar(null);
  };

  const manejarEditar = (contacto) => {
    setContactoEditando(contacto);
    setVista("editar");
  };

  return (
    <div className="d-flex app">
      <Sidebar onSeleccionarVista={setVista} vistaActual={vista} />

      <div className="flex-grow-1 p-4">
        {
          
        }
        <button
          className="toggle-button mb-3"
          onClick={() => setModoOscuro(!modoOscuro)}
        >
          Cambiar a modo {modoOscuro ? "claro" : "oscuro"}
        </button>

        <h1 className="mb-4">Agenda de Contactos</h1>

        <ModalAlerta
          mensaje={mensaje}
          mostrar={!!mensaje}
          onCerrar={() => setMensaje("")}
        />

        {vista === "home" && (
          <ContactList
            contactos={contactos}
            onEditar={manejarEditar}
            onEliminar={(c) => setContactoAEliminar(c)}
          />
        )}

        {vista === "nuevo" && (
          <NuevoContacto
            agregarContacto={agregarContacto}
            onGuardado={() => setVista("home")}
            mostrarAlerta={mostrarAlerta}
          />
        )}

        {vista === "editar" && contactoEditando && (
          <EditarContacto
            contacto={contactoEditando}
            actualizarContacto={actualizarContacto}
            onGuardado={() => {
              setVista("home");
              setContactoEditando(null);
            }}
            mostrarAlerta={mostrarAlerta}
          />
        )}

        {contactoAEliminar && (
          <ModalConfirmacion
            contacto={contactoAEliminar}
            onConfirmar={confirmarEliminacion}
            onCancelar={() => setContactoAEliminar(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
