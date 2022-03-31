import React from "react";
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
      <ul>
          <li onClick={() => window.location.href= '/'}>Home</li>
          <li onClick={() => window.location.href= '/about'}>About</li>
          <li onClick={() => window.location.href= '/contact'}>Contact</li>
      </ul>
    </>
  );
};

export default NavBar;
