import React from 'react'
import heroImg from './../assets/Illustration.png'
function HeroSection() {
  return (
    <section className="flex items-center justify-center p-8 bg-gray-100">
      {/* Left Part - Text */}
      <div className="w-1/2 ml-10">
        <h1 className="text-4xl font-bold mb-4">Lessons and insights <br /><span className='text-green-500'>from 8 years</span></h1>
        <p>Where to grow your business as a photographer: site or social media?</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-5 rounded">
          Register
        </button>
      </div>

      {/* Right Part - Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={heroImg}
          alt="Hero Image"
          className="rounded-lg"
        />
      </div>
    </section>
  )
}

export default HeroSection
