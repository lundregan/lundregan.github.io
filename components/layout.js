import React from 'react'
import Nav from './nav'
import Footer from './footer'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div
      className="
        h-screen relative 
        bg-gray-200 dark:bg-gray-900
        text-black dark:text-white
        flex flex-col
      "
    >
      <Nav></Nav>
      <main className="flex justify-center px-16 bg-gray-200 dark:bg-gray-900 h-full">{children}</main>
      <Footer></Footer>
    </div>
  )
}