import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalCodigo.css";

function ModalCodigo({ onCodigoValido }) {
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(""); // Estado para el mensaje de error
  const navigate = useNavigate();

  const validarCodigo = () => {
    if (codigo === "220822") {
      onCodigoValido();
      navigate("/pregunta");
    } else {
      setError("❌ Código incorrecto, intenta de nuevo.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>🔒 Ingresa nuestro codigo secreto</h3>
        <input
          type="number"
          value={codigo}
          onChange={(e) => {
            setCodigo(e.target.value);
            setError(""); // Borra el error al escribir
          }}
          placeholder=" "
        />
        {error && <p className="error-message">{error}</p>}
        <div className="modal-buttons">
          <button onClick={validarCodigo}>Aceptar</button>
        </div>
      </div>
    </div>
  );
}

export default ModalCodigo;
