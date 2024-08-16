// Header.js
import React from 'react';
import './css/Header.css';
const Header = (props) => {
  return (
    <div className='header'>
      <h3>{props.text}</h3>
    </div>
  );
};

export default Header;
