import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar d-flex justify-content-between ${isFixed ? "fixed" : ""}`}>
      <p className="logo" />
      <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="d-flex">
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
  <li><Link to="/#home" onClick={handleLinkClick}>Startseite</Link></li>
  <li><Link to="/#services" onClick={handleLinkClick}>Leistungen</Link></li>
  <li><Link to="/#about" onClick={handleLinkClick}>Über uns</Link></li>
  <li><Link to="/#review">Bewertungen</Link></li>
  <li><Link to="/#contacts">Kontakte</Link></li>
{/* 🔴 MOBILE BUTTON */}
<li className="menu-kontakt mobile-only">
        <a href="tel:039916734060" onClick={handleLinkClick}>
          <button className="kontakt-btn-brg">Kontakt</button>
        </a>
      </li>
</ul>

{/* 🔴 DESKTOP BUTTON */}
<div className="kontakt-btn-wrapper desktop-only">
      <a href="tel:039916734060">
        <button className="kontakt-btn-brg">Kontakt</button>
      </a>
    </div>
    

      </div>
    </nav>
  );
}

export default Navbar;


  
  
 
        
      