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

    // Точная высота navbar (берём динамически, т.к. fixed меняет padding)
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    // Позиция секции с отступом под navbar
    const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 16; // +16px — небольшой воздух сверху

    window.scrollTo({
      top: sectionTop,
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
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  // Обработчик клика по ссылкам
  const handleAnchorClick = (e) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href")?.replace("#", "");
    if (!targetId) return;

    // Закрываем меню сразу
    setMenuOpen(false);

    // Если НЕ на главной странице → переходим с хэшем
    if (window.location.pathname !== "/") {
      navigate(`/#${targetId}`);
      // Скролл произойдёт автоматически благодаря ScrollToTop (если он настроен на hash)
      return;
    }

    // На главной — ждём закрытия меню и скроллим
    setTimeout(() => {
      scrollToSection(targetId);
    }, 280); // 280–320 мс — комфортная задержка для мобильного
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