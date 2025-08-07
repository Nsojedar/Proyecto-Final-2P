import React, { useState, useEffect } from "react";

const ContactoForm = ({
  contactoInicial = null,
  onSubmit,
  textoBoton = "Guardar",
}) => {
  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    fechaRegistro: "", // agregamos la propiedad
  });

  const [errores, setErrores] = useState({});

  useEffect(() => {
    if (contactoInicial) {
      setContacto(contactoInicial);
    } else {
      setContacto((prev) => ({
        ...prev,
        fechaRegistro: new Date().toISOString(),
      }));
    }
  }, [contactoInicial]);

  const handleChange = (e) => {
    setContacto({
      ...contacto,
      [e.target.name]: e.target.value,
    });
  };

  const validar = () => {
    let errores = {};

    if (!contacto.nombre.trim()) errores.nombre = "El nombre es obligatorio";
    if (!contacto.email.trim()) {
      errores.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(contacto.email)) {
      errores.email = "Email inválido";
    }
    if (!contacto.telefono.trim())
      errores.telefono = "El teléfono es obligatorio";
    if (!contacto.direccion.trim())
      errores.direccion = "La dirección es obligatoria";

    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      onSubmit(contacto);
      if (!contactoInicial) {
        setContacto({ nombre: "", email: "", telefono: "", direccion: "" });
        setErrores({});
      }
    }
  };

  return (
    <div className="container mt-4">
      <h3>
        {contactoInicial ? "Editar Contacto" : "Registrar Nuevo Contacto"}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
            name="nombre"
            value={contacto.nombre}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.nombre}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errores.email ? "is-invalid" : ""}`}
            name="email"
            value={contacto.email}
            onChange={handleChange}
            disabled={!!contactoInicial} // opcional: bloquear edición de email si es editar
          />
          <div className="invalid-feedback">{errores.email}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="text"
            className={`form-control ${errores.telefono ? "is-invalid" : ""}`}
            name="telefono"
            value={contacto.telefono}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.telefono}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input
            type="text"
            className={`form-control ${errores.direccion ? "is-invalid" : ""}`}
            name="direccion"
            value={contacto.direccion}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errores.direccion}</div>
        </div>

        <button type="submit" className="btn btn-primary">
          {textoBoton}
        </button>
      </form>
    </div>
  );
};

export default ContactoForm;
