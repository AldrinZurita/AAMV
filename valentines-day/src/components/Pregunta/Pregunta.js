import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pregunta.css";

const imagenes = [
  "https://raw.githubusercontent.com/tu-usuario/tu-repositorio/main/public/images/gato1.jpg",
  "https://raw.githubusercontent.com/tu-usuario/tu-repositorio/main/public/images/gato2.jpg",
  "https://raw.githubusercontent.com/tu-usuario/tu-repositorio/main/public/images/gato3.jpg",
];

function Pregunta() {
  const [index, setIndex] = useState(0);
  const [tamanoSi, setTamanoSi] = useState(1.5);
  const navigate = useNavigate();

  return (
    <div className="pregunta-container">
      <h3>¿Quieres ser mi 14 de Febrero?</h3>
      <img src={imagenes[index]} alt="Nosotros" className="imagen" />

      <div className="botones">
        <button
          className="boton-si"
          style={{ fontSize: `${tamanoSi}rem`, padding: `${tamanoSi * 0.5}rem` }}
          onMouseEnter={(e) => (e.target.textContent = "Mas te vale")}
          onMouseLeave={(e) => (e.target.textContent = "Sí")}
          onClick={() => navigate("/final")}
        >
          Sí
        </button>

        <button
          className="boton-no"
          onMouseEnter={(e) => (e.target.textContent = "Ni se te ocurra")}
          onMouseLeave={(e) => (e.target.textContent = "No")}
          onClick={() => {
            setIndex((index + 1) % imagenes.length);
            setTamanoSi(tamanoSi + 0.2); // Hace crecer más el botón "Sí"
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Pregunta;
