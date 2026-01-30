import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate();

  // Функция плавного скролла с учётом высоты navbar
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;
  
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
  
    const targetTop =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      26;
  
    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  


  // Обработчик клика по ссылкам
  const handleAnchorClick = (e) => {
    e.preventDefault();
  
    const targetId = e.currentTarget
      .getAttribute("href")
      ?.replace("#", "");
  
    if (!targetId) return;
  
    setMenuOpen(false);
  
    if (window.location.pathname !== "/") {
      navigate(`/#${targetId}`);
      return;
    }
  
    setTimeout(() => {
      scrollToSection(targetId);
    }, 300);
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
          <li><a href="#home"     onClick={handleAnchorClick}>Startseite</a></li>
          <li><a href="#services" onClick={handleAnchorClick}>Leistungen</a></li>
          <li><a href="#about"    onClick={handleAnchorClick}>Über uns</a></li>
          <li><a href="#review"   onClick={handleAnchorClick}>Bewertungen</a></li>
          <li><a href="#contacts" onClick={handleAnchorClick}>Kontakte</a></li>

          <li className="menu-kontakt mobile-only">
            <a href="tel:039916734060" onClick={handleAnchorClick}>
              <button className="kontakt-btn-brg">Kontakt</button>
            </a>
          </li>
        </ul>

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