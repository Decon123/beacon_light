import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [lightOn, setLightOn] = useState(false); // Beacon light state

  useEffect(() => {
    // Hide the logo after 3 seconds and fade out
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Toggle beacon light on/off
  const toggleLight = () => {
    setLightOn((prev) => !prev);
  };

  return (
    <div className="app-container">
      {showLogo ? (
        <div className="logo-container">
          <img
            src="/images/hyundai_logo.png"
            alt="Hyundai Logo"
            className="animated-logo"
          />
        </div>
      ) : (
        <div className="content-container">
          {/* Beacon light changes based on state */}
          <img
            className={`beacon-light ${lightOn ? "on" : ""}`}
            src={
              lightOn
                ? "/images/beacon_light_on.png"
                : "/images/beacon_light_off.png"
            }
            alt="Beacon Light"
          />

          {/* Toggle button with dynamic text */}
          <Button
            toggleLight={toggleLight}
            text={lightOn ? "Switch On" : "Switch Off"}
          />
        </div>
      )}
    </div>
  );
};

export default App;
