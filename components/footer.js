import React from 'react'
import { ImLinkedin, ImTwitter, ImGithub } from 'react-icons/im'
//import Link from 'next/link'


export default Footer => {
  return (
    <footer className="bottom-0 absolute text-center w-full py-2 bg-gray-200 dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="flex justify-around w-80">
        <a target="_blank" href="https://www.linkedin.com/in/elundregan">
          <ImLinkedin className="text-2xl text-blue-700"></ImLinkedin>
        </a>
        <a target="_blank" href="https://www.twitter.com/lundregan1">
          <ImTwitter className="text-2xl text-blue-500"></ImTwitter>
        </a>
        <a target="_balnk" href="https://www.github.com/lundregan">
          <ImGithub className="text-2xl text-purple-600"></ImGithub>
        </a>
      </div>
      <div className="mt-2 text-sm">
      Ethan Lundregan ©2021 | <a href="https://github.com/lundregan/Portfolio" target="_blank" className="text-blue-500">Source Code</a>
      </div>
    </footer>
  )
}
