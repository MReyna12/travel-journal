import React from "react";
import "./index.css";

function Header() {
  return (
    <header>
      <div className="container-width flex align-items-center justify-content-center">
        <img src="/earth.png" alt="Icon of earth" />
        <h1>my travel journal.</h1>
      </div>
    </header>
  );
}

export default Header;
