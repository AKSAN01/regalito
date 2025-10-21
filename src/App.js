import React, { useState } from "react";
import PasswordGate from "./components/PasswordGate";
import SecretPage from "./components/SecretPage";
import "./App.css";

function App() {
  const [accessGranted, setAccessGranted] = useState(false);

  return (
    <div className="App">
      {!accessGranted ? (
        <PasswordGate onAccess={() => setAccessGranted(true)} />
      ) : (
        <SecretPage />
      )}
    </div>
  );
}

export default App;
