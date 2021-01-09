import React from 'react'
import Nav from './nav'
import Footer from './footer'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div
      className="
        min-h-screen relative 
        bg-gray-200 dark:bg-gray-900
        text-black dark:text-white
      "
    >
      <Nav></Nav>
      <main className="flex justify-center px-16 bg-gray-200 dark:bg-gray-900">{children}</main>
      <Footer></Footer>
    </div>
  )
}