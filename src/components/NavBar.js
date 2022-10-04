import React, { useContext } from 'react';
import NameContext from './NameContext';
import '../styles/navBarStyles.css'

const NavBar = () => {
  const {name} = useContext(NameContext);
  return (
    <nav>
      <p>Hola {name}</p>
    </nav>
  );
}

export default NavBar;
