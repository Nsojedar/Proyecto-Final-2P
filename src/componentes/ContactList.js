import React, { useState, useEffect } from "react";
import FiltroOrdenacion from "./FiltroOrdenacion";

const ContactList = ({ contactos, onEditar, onEliminar }) => {
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("asc"); // 'asc' y 'desc' para nombres
  const [letraInicial, setLetraInicial] = useState("");
  console.log(contactos.map((c) => c.fechaRegistro)); // <-- Aquí

  useEffect(() => {
    setLetraInicial(""); // Resetea letra al cambiar orden
  }, [orden]);

  const contactosFiltrados = contactos
    .filter(
      (c) =>
        (c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
          c.email.toLowerCase().includes(busqueda.toLowerCase())) &&
        (letraInicial === "" || c.nombre.toUpperCase().startsWith(letraInicial))
    )
    .sort((a, b) => {
      switch (orden) {
        case "asc": // Debe coincidir con valores del select
          return a.nombre.localeCompare(b.nombre);
        case "desc":
          return b.nombre.localeCompare(a.nombre);
        case "reciente":
          return new Date(b.fechaRegistro) - new Date(a.fechaRegistro);
        case "antiguo":
          return new Date(a.fechaRegistro) - new Date(b.fechaRegistro);
        default:
          return 0;
      }
    });

  if (contactosFiltrados.length === 0) {
    return <p>No hay contactos guardados.</p>;
  }

  return (
    <>
      <FiltroOrdenacion
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        orden={orden}
        setOrden={setOrden}
        letraInicial={letraInicial}
        setLetraInicial={setLetraInicial}
      />
      <h4>Contactos Guardados</h4>
      <div className="row">
        {contactosFiltrados.map((c) => (
          <div className="col-md-4" key={c.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{c.nombre}</h5>
                <p className="card-text">
                  <strong>Email:</strong> {c.email}
                </p>
                <p className="card-text">
                  <strong>Teléfono:</strong> {c.telefono}
                </p>
                <p className="card-text">
                  <strong>Dirección:</strong> {c.direccion}
                </p>

                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => onEditar(c)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onEliminar(c)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
