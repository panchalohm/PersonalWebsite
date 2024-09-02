import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Navbar = () => {
  const [active, setActive] = useState(' ');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to = "/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        > 
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Ohm&nbsp;
            <span className='custom:block hidden'> | Software Engineer</span>
          </p>
        </Link>

        <div className="bg-white rounded-lg p-2">
          <a
            href="https://drive.google.com/file/d/1Ho8xS5X18ADj1NWu5V3Gb-elATB8oZ-a/view?usp=sharing"
            // href="NEWRESM.pdf"
            target="_blank"
            className="text-black hover:underline"
          >
            My Resume
          </a>
        </div>

          <div className="bg-white rounded-lg p-2">
            <a
              href="https://www.linkedin.com/in/panchalohm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black flex items-center space-x-2 hover:underline"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="bg-white rounded-lg p-2">
            <a
              href="https://github.com/panchalohm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black flex items-center space-x-2 hover:underline"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </div>

        <ul className='list-none hidden custom2:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

          <div className="custom2:hidden flex flex-1
          justify-end items-center">
            <img
            src={toggle? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
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