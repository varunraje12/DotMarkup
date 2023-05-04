import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero from '../../public/Hero.png'

const Hero = () => {
  return (
    <div className="lg:flex lg:items-center min-h-screen w-full">

      <div className='w-full lg:w-1/2 items-center px-5 lg:px-16 py-5 lg:py-0'>
        <h1 className='text-4xl font-poppins font-bold text-gray-900'>The
          Ultimate Resource
        </h1>
        <p className='text-4xl font-poppins font-bold text-gray-900'>
          for Finding SEO Agencies
        </p>
        <p className='font-normal text-md mt-2'>Finding the right SEO experts or Agency for your
          project can be a daunting task. That&apos;s why we&apos;ve created a directory of
          the best SEO agencies. Our directory is designed to help you find the
          perfect professional to fit your needs. Soon adding for more
          professionals from different geographies.</p>
        <Link href={'/seo'}>
          <button className="bg-red-600 hover:bg-red-300 text-white font-bold py-4 px-6 rounded-md mt-5">Get Started</button>
        </Link>
      </div>

      <Image src={hero} alt="hero img" className="w-full lg:w-1/2 object-cover h-96 lg:h-auto" />

    </div>

  )
}

export default Hero