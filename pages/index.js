import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
    <div className="container flex justify-center align-center items-center">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="text-center">
        <h1 className="text-6xl">Ethan Lundregan</h1>
        <p className="text-2xl mt-4">A Next Generation Developer</p>
        <Link href="/projects">
          <button className="p-2 mt-8 bg-blue-500 dark:bg-purple-500 text-white rounded shadow-md">View My Work</button>
        </Link>
      </div>

    </div>
    </Layout>
  )
}
