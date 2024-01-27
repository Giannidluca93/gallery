'use client';

import Link from 'next/link';
import Menu from '../menu';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Menu handleClick={handleMenuClick} />
      <ul
        className={`${
          !isOpen ? 'hidden md:flex' : 'flex'
        } absolute w-full mt-3 z-10 bg-slate-900 text-white p-5 right-0 flex flex-col md:flex-row md:relative md:p-0 md:bg-white md:text-black`}
      >
        <li className="p-3">
          <Link onClick={() => setIsOpen(false)} href="/about">About Me</Link>
        </li>
        <li className="p-3">
          <Link onClick={() => setIsOpen(false)} href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
