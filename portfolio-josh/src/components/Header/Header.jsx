import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import Logo from '../../assets/Logo.jpeg';
import '../../App.css';

const Header = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const change = (str) => () => {
    setActiveButton(str);
    setMenuOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-around p-4 text-white nav-bg position">
      <div className="font-bold mb-4 lg:mb-0">
        <img src={Logo} alt="Logo" className='h-20 w-30' />
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      <div className={`pl-7 flex-col lg:flex-row gap-4 text-base lg:flex ${menuOpen ? 'flex' : 'hidden'} lg:flex`}>
        {["Home", "Skills", "Education", "Projects", "Recommendations", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            onClick={change(item)}
            className={`px-4 py-2 rounded font-medium ${activeButton === item ? 'bg-yellow-500 text-black' : 'text-black'}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
