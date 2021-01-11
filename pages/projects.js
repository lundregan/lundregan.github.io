import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"

export default function Home() {
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div>
        <h1>Hello World</h1>
        <p>Lorem ipsum ahbdsad sajnd ksand,msnady sab dsakdasndm, asndk asd </p>
      </div>

    </div>
    </Layout>
  )
}