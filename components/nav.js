import React from 'react'
import DarkModeToggleButton from './darkModeToggleButton'
import Link from 'next/link'

// GRADIENT: bg-gradient-to-b from-purple-500 to-purple-400

export default Nav => {
    return (
      <nav className="text-blue-600 dark:text-purple-600 p-2 flex justify-around sticky top-0 bg-gray-100 dark:bg-gray-800 w-full flex-wrap shadow-md">
        <div className="left w-1/2 flex flex-wrap font-serif">
          <div>
            <p className="text-blue-600 dark:text-purple-600 font-semibold text-2xl">LUNDREGAN</p>
            <p className="text-gray-800 dark:text-gray-200 pl-2 text-xs font-mono">Next Generation Developer</p>
          </div>
          <DarkModeToggleButton></DarkModeToggleButton>
        </div>

        <div className="right w-1/2 flex text-right text-xl sm:justify-around flex-col sm:flex-row font-medium">
          <Link href="/" className="mx-2">
            <a>Home</a>
          </Link>
          <Link href="/about" className="mx-2">
            <a>About</a>
          </Link>
          <Link href="/projects" className="mx-2">
            <a>Projects</a>
          </Link>
          <Link href="/blog" className="mx-2">
            <a>Blog</a>
          </Link>
          <Link href="/contact" className="mx-2">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    )
}