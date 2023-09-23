import React from 'react';
import './style.css'

const Header = () => {
  return (
    <div style={{ backgroundColor: "#2D3748", width: "100%", padding: "15px" }}>
      <h1 className='header' style={{ color: "#fff", fontSize: "1.6rem", fontWeight: "700" }}>
        Image Gallery
      </h1>
    </div>
  )
}

export default Header;
