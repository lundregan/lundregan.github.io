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
          alt="Portfolio website"
          width={500}
          height={281}
        ></Image>
        <div className="flex flex-col justify-between py-2 pl-4">
          <h1 className="text-2xl text-blue-700 dark:text-purple-500">Old Portfolio</h1>

          <p>Portfolio project to host my websites on. showcasing my knowlkedge and skillset</p>

          <p>Nuxt | Tailwind | Sass</p>
        </div>
      </div>

      <div className="flex">
        <Image
          src='/project-imgs/hexoggle.png'
          alt="Portfolio website"
          width={500}
          height={281}
        ></Image>
        <div className="flex flex-col justify-between py-2 pl-4">
          <h1 className="text-2xl text-blue-700 dark:text-purple-500">Hexoggle</h1>

          <p>Hex based puzzle tile games, where you toggle tiles to complete the level.</p>

          <p>Vue</p>
        </div>
      </div>

      <div className="flex">
        <Image
          src='/project-imgs/desmoscorp.png'
          alt="Website for mock video game company"
          width={500}
          height={281}
        ></Image>
        <div className="flex flex-col justify-between py-2 pl-4">
          <h1 className="text-2xl text-blue-700 dark:text-purple-500">Desmos Corp</h1>

          <p>Mock video game company website</p>

          <p>HTML | CSS | JS | Nuxt</p>
        </div>
      </div>

    </div>
    </Layout>
  )
}