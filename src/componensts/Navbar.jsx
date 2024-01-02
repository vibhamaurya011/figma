import React from 'react'
import './../index.css'
import logo from './../assets/logo.png'
function Navbar() {
  return (
    <nav className="bg-white-800 pt-4 pb-4 pl-14 pr-14 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-8 w-8 mr-2"
        />
        <span className="text-gray-800 text-3xl font-semibold">Nexcent</span>
      </div>

      <div className="flex items-center gap-8">
        <ul className="flex space-x-8 text-gray-700">
          <li>
            <a href="#home" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="#features" className="hover:text-gray-300">Features</a>
          </li>
          <li>
            <a href="#community" className="hover:text-gray-300">Community</a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-300">Blog</a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-gray-300">Pricing</a>
          </li>
        </ul>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Register Now
        </button>
      </div>
    </nav>
  )
}

export default Navbar
