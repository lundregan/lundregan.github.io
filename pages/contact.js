import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"
import Available from '../components/Available'

export default function Home() {
  return (
    <Layout>
    <div className="container w-full h-full flex flex-col justify-around align-center items-center">
      <Head>
        <title>Contact Lundregan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Available></Available>
      

      <div>
        <div className="flex">
          <div className="flex flex-col my-2 pr-2">
            <label>Name</label>
            <input className="rounded-xl p-2 text-black"></input>
          </div>

          <div className="flex flex-col my-2 pl-2">
            <label>Email</label>
            <input className="rounded-xl p-2 text-black"></input>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label className="pl-2">How Can I Help?</label>
          <textarea className="rounded-xl p-2 text-black"></textarea>
        </div>

        <div className="relative">
          <button className="absolute right-0 bg-blue-500 text-white p-2 rounded shadow mt-4">Send Message</button>
        </div>
      </div>
    </div>
    </Layout>
  )
}
