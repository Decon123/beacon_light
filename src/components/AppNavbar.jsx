import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
/* import "./AppNavbar.css"; */
function AppNavbar() {
  return (
    <div className="fullscreen-container">
      {/* Color Overlay */}
      <div className="color-overlay"></div>

      {/* Fullscreen Logo */}
      <img
        src="/images/hyundai_logo.png" // Correct path to your Hyundai logo
        alt="Hyundai Logo"
        className="fullscreen-logo"
      />
    </div>
  );
}

export default AppNavbar;
