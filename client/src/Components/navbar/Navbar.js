import React, { useState, useEffect, useRef } from 'react';
import {withRouter} from 'react-router-dom'
import '../../componentscss/navbar/navbar.css';

function Navbar({showMoreFunc, scrollVal}) {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const iconHamburger = useRef();
  const pointNavBar = useRef();


  useEffect(() => {
    if(hamburgerClick == true) {
      showMoreFunc(true)
      iconHamburger.current.classList.add('clicked')
    }
    else if(hamburgerClick == false) {
      showMoreFunc(false)
      iconHamburger.current.classList.remove('clicked')
    }
  }, [hamburgerClick])

  useEffect(() => {
    if(scrollVal == true) 
    {
      pointNavBar.current.classList.add("flow")
      console.log('flow')
    }
    else 
    {
      pointNavBar.current.classList.remove("flow")
      console.log('unflow')
    }
  }, [scrollVal])

  return (
    <div ref={pointNavBar} className="navbar">
      <div className="inNavbarCon">
        <div className="navbar__logo">
          <span>OP.GG</span>
        </div>
        <div className="navbar__searchInput">
            <input type="text" placeholder="굿즈는 opgg"/>
        </div>
        <div className="navbar__searchFilter">
          <div ref={iconHamburger} onClick={() => setHamburgerClick(!hamburgerClick)} className="navbar__searchFilter__iconContainer">
            <div className="navbar__searchFilter__iconContainer_icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(withRouter(Navbar))