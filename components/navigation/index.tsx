'use client'

import Link from 'next/link'
import Menu from '../menu'
import { useState } from 'react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <Menu handleClick={handleMenuClick} />
      <ul
        className={`${
          !isOpen ? 'hidden md:flex' : 'flex'
        } absolute right-0 z-10 mt-3 flex w-full flex-col bg-slate-900 p-5 text-white md:relative md:flex-row md:bg-white md:p-0 md:text-black`}
      >
        <li className='p-3'>
          <Link onClick={() => setIsOpen(false)} href='/about'>
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
