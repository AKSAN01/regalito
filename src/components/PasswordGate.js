import React, { useState } from "react";
import "./PasswordGate.css";

const PasswordGate = ({ onAccess }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleCheck = () => {
    const secret = "mimonita210425"; // 
    if (input === secret) {
      onAccess();
    } else {
      setError("Ups... esa no es 😅");
    }
  };

  return (
    <div className="gate-container">
      <h1>💌 Ingresa la clave secreta</h1>
      <input
        type="password"
        value={input}
        placeholder="Escríbela aquí..."
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCheck}>Entrar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PasswordGate;
