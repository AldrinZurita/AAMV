import React from "react";
import { useNavigate } from "react-router-dom";
import "./carta.css";

function Carta() {
  const navigate = useNavigate();

  return (
    <div className="carta-container" onClick={() => navigate("/codigo")}>
      <div className="carta">
        <h2>Toca aquí</h2>
      </div>
    </div>
  );
}

export default Carta;
