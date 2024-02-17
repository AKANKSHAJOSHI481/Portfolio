import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style';
import { navLinks } from '../constants/index';
import { logo, menu, close } from '../assets'
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
        <Link to="/" className='flex items-center gap-2' onClick={() => { setActive(); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-lg font-bold flex cursor-pointer'>Akanksha &nbsp; <span className='sm:block hidden '>Joshi</span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 top-20 right-0 mx-4 my-2 black-gradient absolute min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-start gap-4 '>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => {setToggle(!toggle); setActive(link.title);}}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar