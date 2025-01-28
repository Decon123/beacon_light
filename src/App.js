import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import Button from "./components/Button";

function App() {
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    setLightOn((prev) => !prev);
  };

  return (
    <div className="App">
      <AppNavbar />
      <div className="color-overlay"></div>

      {/* Centered Content Above Overlay */}
      <div className="content-container">
        <img
          className={`beacon-light ${lightOn ? "on" : ""}`}
          src={
            lightOn
              ? "/images/beacon_light_on.png"
              : "/images/beacon_light_off.png"
          }
          alt="Beacon Light"
        />

        <Button toggleLight={toggleLight} />
      </div>
    </div>
  );
}

export default App;
