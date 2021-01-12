import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
    <div className="container flex justify-center items-center">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="shadow-md m-8 p-2 rounded">
          <h1 className="text-center text-4xl dark:text-purple-500 mb-8">About Me</h1>

          <p className="mt-2">
          I have been programming as a hobby since high school, ever since I wrote my first line of code I have been captivated.
          </p>
          <p className="mt-2">
          Moved to web development because I love the fact that websites and web apps are accessible to everyone,
          Around the world and on a huge range of devices.
          </p>
          <p className="mt-2">
          I am self-taught, and never afraid to learn something new or back away from a challenge. Quite the opposite actually they are my two favourite things In development, challenges and learning.
          I am always on the look out to learn new libraries, frameworks, and languages to increase my skill set.
          </p>
          <p className="mt-2">
          If you have any questions or inquires,
          Send me a message, I'd love to hear from you.
          </p>
        </div>

        {/* <div className="shadow m-8 p-2">
          <h1 className="text-center text-2xl dark:text-purple-500">My Skillset</h1>
          <div>
            <h2>HTML</h2>

            <p>Yeah html baby!</p>
          </div>
        </div> */}
      </div>

    </div>
    </Layout>
  )
}
