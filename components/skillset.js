import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaBootstrap, FaSass, FaVuejs, FaReact } from 'react-icons/fa'
import { SiTypescript, SiNuxtDotJs, SiFirebase } from 'react-icons/si'

export default function Skillset() {
  return (
    <div>
      <div>
        <p className="text-center">
          Styling
        </p>
        <div className="flex flex-wrap justify-around">
          <FaCss3Alt className="text-blue-600 text-6xl"></FaCss3Alt>
          <FaBootstrap className="text-purple-600 text-6xl"></FaBootstrap>
          <FaSass className="text-pink-600 text-6xl"></FaSass>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-center">
          Scripting
        </p>

        <div className="flex flex-wrap justify-around">
          <SiTypescript className="text-blue-500 text-6xl"></SiTypescript>
          <FaVuejs className="text-green-600 text-6xl"></FaVuejs>
          <SiNuxtDotJs className="text-green-700 text-6xl"></SiNuxtDotJs>
          <FaReact className="text-blue-700 text-6xl"></FaReact>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-center">
          Other
        </p>

        <div className="flex flex-wrap justify-around">
          <SiFirebase className="text-yellow-500 dark:text-yellow-400 text-6xl"></SiFirebase>
        </div>
      </div>
    </div>
  )
}
