import Head from 'next/head'
import Layout from '../components/layout'
import "tailwindcss/tailwind.css"
import Available from '../components/Available'
const { useState } = React;

export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeMessage = (e) => setMessage(e.target.value);

  const handlePress = () => {
    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    });
  }
  
  return (
    <Layout>
    <div className="container w-full h-full flex flex-col justify-around align-center items-center">
      <Head>
        <title>Contact Lundregan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Available></Available>
      

      <div className="flex flex-col max-w-full">
        <div className="flex flex-wrap">
          <div className="flex flex-col my-2 pr-2">
            <label>Name</label>
            <input className="rounded-xl p-2 text-black" type='text' value={name} onChange={handleChangeName}></input>
          </div>

          <div className="flex flex-col my-2">
            <label>Email</label>
            <input className="rounded-xl p-2 text-black" type='text' value={email} onChange={handleChangeEmail}></input>
          </div>
        </div>
        <div className="flex flex-col my-2">
          <label className="pl-2">How Can I Help?</label>
          <textarea className="rounded-xl p-2 text-black" type='text' value={message} onChange={handleChangeMessage}></textarea>
        </div>

        <div className="relative">
          <button className="absolute right-0 bg-blue-500 text-white p-2 rounded shadow mt-4" onClick={handlePress}>Send Message</button>
        </div>
      </div>
    </div>
    </Layout>
  )
}
