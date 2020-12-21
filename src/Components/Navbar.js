import React, { useState } from 'react';
import DropDown from './DropDown';
import './Navbar.css';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars, FaCaretDown } from 'react-icons/fa';

const Navbar = () => {
 const [click, setClick] = useState(false);
 const [dropdown, setDropdown] = useState(false);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false)

const mouseOver =()=>{
 setDropdown(true)
}

const mouseOut=()=>{
 setDropdown(false);
}
  
 return (
  <>
   <nav className="navbar">
    <Link className="navbar-logo" to="/">
     JSK
    </Link>
    <div className="menu-icon" onClick={handleClick}>
     {click ? <FaTimes /> : <FaBars />}
    </div>
    <ul className={click ? "nav-menu active" : "nav-menu"}>
     <li className="nav-item">
      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
       Home
       </Link>
     </li>
     <li className="nav-item">
      <Link to="/services"
       className="nav-links"
       onMouseOver={mouseOver}
       onMo={mouseOut}
      >
       Services <FaCaretDown />
       {/* {DropDown} */}
      </Link>
      { dropdown && <DropDown /> }
     </li>
     <li className="nav-item">
      <Link to="/" className="nav-links-mobiles" onClick={closeMobileMenu}>
       Sign Up
       </Link>
     </li>
    </ul>
    <Button />
   </nav>
  </>
 )
}

export default Navbar
