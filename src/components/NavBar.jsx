import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Button from './Button1';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='max-w-[120px] h-auto ml-4' />

      <div className='flex justify-center items-center flex-1'>
        <ul className='list-none sm:flex hidden items-center'>
          {navLinks.map((el, index) => (
            <li
              key={el.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
              } text-white`}
            >
              <a href={`#${el.id}`}>{el.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {/* Replace anchor tag with Link component */}
            {navLinks.map((el) => (
              <li key={el.id} className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white">
                <Link to={`#${el.id}`} onClick={() => setToggle(false)}>
                  {el.title}
                </Link>
              </li>
            ))}
            {/* Add the Link to the Dapp page */}
            <li className="font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white">
              <Link to="/dapp" onClick={() => setToggle(false)}>Dapp Page</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='hidden sm:block'>
        <Button styles='mr-4' />
      </div>
    </nav>
  );
};

export default NavBar;
