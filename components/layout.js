import React from 'react'
import Link from 'next/link'
import DarkModeToggleButton from './darkModeToggleButton'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div className={"min-h-screen relative "}>
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
      <main className="flex justify-center px-16 bg-gray-200 dark:bg-gray-900">{children}</main>
      <footer className="bottom-0 absolute text-center w-full py-2">
        © 2021 Ethan Lundregan - <a href="https://github.com/lundregan/Portfolio" target="_blank" className="text-blue-500">Source Code</a>
      </footer>
    </div>
  )
}