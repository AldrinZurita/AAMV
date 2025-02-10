import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carta from "./components/carta/carta";
import ModalCodigo from "./components/ModalCodigo/ModalCodigo";
import Pregunta from "./components/Pregunta/Pregunta";
import Final from "./components/Final/Final";
import HeartAnimation from "./components/HeartAnimation/HeartAnimation";

function App() {
  const [codigoValido, setCodigoValido] = useState(false);

  return (
    <Router>
      <HeartAnimation />
      <Routes>
        <Route path="/" element={<Carta />} />
        <Route path="/codigo" element={<ModalCodigo onCodigoValido={() => setCodigoValido(true)} />} />
        {codigoValido && <Route path="/pregunta" element={<Pregunta />} />}
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}

export default App;
