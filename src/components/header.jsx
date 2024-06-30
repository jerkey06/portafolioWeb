import React from 'react';

const Header = ({handleNavClick}) => (
  <header>
    <nav>
      <ul>
        <li><a href="#hero" onClick={(e) => handleNavClick(e, 'inicio')}>Inicio</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Habilidades</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Proyectos</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
