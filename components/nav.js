import React from 'react'
import DarkModeToggleButton from './darkModeToggleButton'
import Link from 'next/link'
import Footer from './footer'

export default Nav => {
    return (
      <nav className="text-white p-4 flex justify-around sticky top-0 bg-blue-400 dark:bg-black w-full flex-wrap">
        <div className="left w-1/2 flex flex-wrap">
          <div>
          <p className="text-red-600 font-semibold">LUNDREGAN</p>
          <p className="pl-2 text-xs">Next Generation Developer</p>
          </div>
          <DarkModeToggleButton></DarkModeToggleButton>
        </div>

        <div className="right w-1/2 flex text-right sm:justify-around flex-col sm:flex-row font-medium">
          <Link href="/" className="mx-2">
            <a>Home</a>
          </Link>
          <Link href="/help" className="mx-2">
            <a>Help</a>
          </Link>
          <Link href="/freelance" className="mx-2">
            <a>Freelance</a>
          </Link>
          <Link href="/about" className="mx-2">
            <a>About</a>
          </Link>
          <Link href="/blog" className="mx-2">
            <a>Blog</a>
          </Link>
        </div>
      </nav>
    )
}
