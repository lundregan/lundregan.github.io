import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaBootstrap, FaSass, FaVuejs, FaReact } from 'react-icons/fa'
import { SiTypescript, SiNuxtDotJs, SiFirebase } from 'react-icons/si'

export default function Skillset() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-between items-center bg-gray-800 rounded-md w-64 mx-4 py-2">
        <p>
          Styling
        </p>
        <div className="flex flex-wrap justify-around">
          <FaCss3Alt className="text-blue-600 text-6xl"></FaCss3Alt>
          <FaBootstrap className="text-purple-600 text-6xl"></FaBootstrap>
          <FaSass className="text-pink-600 text-6xl"></FaSass>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center bg-gray-800 rounded-md w-64 mx-4 py-2">
        <p>
          Scripting
        </p>

        <div className="flex flex-wrap justify-around items-around w-32 mt-8">
          <SiTypescript className="text-blue-500 text-6xl"></SiTypescript>
          <FaVuejs className="text-green-600 text-6xl"></FaVuejs>
          <SiNuxtDotJs className="text-green-700 text-6xl"></SiNuxtDotJs>
          <FaReact className="text-blue-700 text-6xl"></FaReact>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center bg-gray-800 rounded-md w-64 mx-4 py-2">
        <p>
          Other
        </p>

        <div className="flex flex-wrap justify-around">
          <SiFirebase className="text-yellow-500 dark:text-yellow-400 text-6xl"></SiFirebase>
        </div>
      </div>
    </div>
  )
}
