import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
    <div className="container p-8 flex flex-col justify-around">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="flex">
        <Image
          src='/project-imgs/lundregan.png'
          alt="Picture of the author"
          width={500}
          height={281}
        ></Image>
        <div className="flex flex-col justify-between py-2 pl-4">
          <h1 className="text-2xl dark:text-purple-500">Old Portfolio</h1>

          <p>Portfolio project to host my websites on. showcasing my knowlkedge and skillset</p>

          <p>HTML | CSS | JS | VUE | VUEX</p>
        </div>
      </div>

    </div>
    </Layout>
  )
}