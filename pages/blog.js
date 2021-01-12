import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"

export default function Home() {
  return (
    <Layout>
    <div className="container flex flex-col justify-center">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="dark:bg-gray-800 shadow p-2 rounded-xl my-2">
        <h1 className="text-2xl text-blue-500 dark:text-purple-500">Why you should learn web Development</h1>
        <p className="mt-2 pl-2">Why web development, and why you should learn how to create things for the web.</p>

        <div className="flex mt-8">
          <p className="border-2 border-blue-500 dark:border-purple-500 rounded-xl px-2 mx-2">Web Development</p>
          <p className="border-2 border-blue-500 dark:border-purple-500 rounded-xl px-2 mx-2">Learning</p>
        </div>
      </div>

      <div className="dark:bg-gray-800 shadow p-2 rounded-xl my-2">
        <h1 className="text-2xl text-blue-500 dark:text-purple-500">What is HTTPS, and why is it the new standard?</h1>
        <p className="mt-2 pl-2">HTTPS is the bare minimum amount of sercurity you should offer your users, but why?</p>

        <div className="flex mt-8">
          <p className="border-2 border-blue-500 dark:border-purple-500 rounded-xl px-2 mx-2">Sercurity</p>
          <p className="border-2 border-blue-500 dark:border-purple-500 rounded-xl px-2 mx-2">Web Development</p>
        </div>
      </div>

    </div>
    </Layout>
  )
}
