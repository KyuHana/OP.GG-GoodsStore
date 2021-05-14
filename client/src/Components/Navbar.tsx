import React, { useState, useEffect } from 'react';
import '../componentscss/navbar/navbar.css';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const clickFilter = () => {
    setHamburgerClick(!hamburgerClick);
  }
  return (
    <div className="navbar">
      <div className="inNavbarCon">
        <div className="navbar__logo">
          <span>OP.GG</span>
        </div>
        <div className="navbar__searchInput">
            <input type="text" placeholder="굿즈는 opgg"/>
        </div>
        <div className="navbar__searchFilter">
          <MenuIcon className="navbar__searchFilter_icon" onClick={() => clickFilter()} fontSize="small"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar