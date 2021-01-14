import React from 'react'
import DarkModeToggleButton from './darkModeToggleButton'
import Link from 'next/link'

// GRADIENT: bg-gradient-to-b from-purple-500 to-purple-400

export default Nav => {
    return (
      <nav className="text-blue-700 dark:text-white p-2 flex justify-around sticky top-0 w-full flex-wrap">
        <div className="left w-1/2 flex flex-wrap">
            <Link href="/">
                <p className="text-blue-600 dark:text-white font-semibold text-3xl font-mono cursor-pointer">Lundregan</p>
            </Link>
          <DarkModeToggleButton></DarkModeToggleButton>
        </div>

        <div className="right w-1/3 flex text-right text-md sm:justify-around flex-col sm:flex-row">
          <Link href="/" className="mx-2">
            <a className="hover:text-black dark:hover:text-purple-500">Home</a>
          </Link>
          <Link href="/about" className="mx-2">
            <a className="hover:text-black dark:hover:text-purple-500">About</a>
          </Link>
          <Link href="/projects" className="mx-2">
            <a className="hover:text-black dark:hover:text-purple-500">Projects</a>
          </Link>
          <Link href="/blog" className="mx-2">
            <a className="hover:text-black dark:hover:text-purple-500">Blog</a>
          </Link>
          <Link href="/contact" className="mx-2">
            <a className="hover:text-black dark:hover:text-purple-500">Contact</a>
          </Link>
        </div>
      </nav>
    )
}
