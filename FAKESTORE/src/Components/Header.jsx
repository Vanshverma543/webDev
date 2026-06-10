import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        padding: "15px",
      }}
    >
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>
        Home
      </Link>

      <Link to="/about" style={{ color: "white", marginRight: "20px" }}>
        About
      </Link>

      <Link to="/product" style={{ color: "white", marginRight: "20px" }}>
        Product
      </Link>

      <Link to="/contactUs" style={{ color: "white" }}>
        Contact Us
      </Link>
    </div>
  );
};

export default Header;
