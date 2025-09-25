// src/components/Navbar/Navbar.jsx
"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarStyle from "./Navbar.module.css";
import { FaBars } from 'react-icons/fa'; 

const NavBar = ({ isLogged, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={navbarStyle.navbar}>
      
      <button className={navbarStyle.hamburger} onClick={toggleMenu}>
        <FaBars />
      </button>

      <ul className={`${navbarStyle.navList} ${isOpen ? navbarStyle.open : ''}`}>
        <li>
          <Link to="/home" onClick={closeMenu}> Inicio </Link>
        </li>
        <li>
          {isLogged ? (
            <Link to="/myturns" onClick={closeMenu}> Reservas </Link>
          ) : (
            <Link to="/register" onClick={closeMenu}> Reservas </Link>
          )}
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}> Contacto </Link>
        </li>
        {!isLogged && (
          <li>
            <Link to="/login" onClick={closeMenu}> Iniciar Sesión </Link>
          </li>
        )}
        {isLogged && (
          <li>
            <button onClick={() => { onLogout(); closeMenu(); }}>Cerrar sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
