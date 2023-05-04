import React from 'react'
import Image from 'next/image'
import Hero from '../components/ui/Hero'
import Card from '../components/ui/Card'
import svg2 from '../public/download (2).svg'
import star from '../public/star.svg'
import Handshake from '../public/Hand.png'
import people from '../public/people.png'
import BusinessCard from '../components/ui/BusinessCard'
import { FaQuoteLeft } from 'react-icons/fa'
import Head from "next/head";

const index = () => {
  return (
    <>
    <Head>
    <meta name="robots" content="noindex,nofollow"></meta>
    </Head>
      <div>
        { /********** Hero *********/}

        <Hero />
        {/* -------------------------- */}
        <div className='py-5'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold'>
              Your Dream Partner for your Business
            </h2>
            <p className='text-xl p-2'>
              Easily find Experts or Agencies to spearhead your business easily. Currently SEO agencies are listed
            </p>
          </div>
          <div className='grid grid-cols-1 gap-3 px-5 lg:px-16 py-8'>
            <Card
              heading='Marketing'
              icon={svg2}
              a='Digital Marketing'
              b='SEO'
              c='Social Media Marketing'
              d='Mobile Marketing'
              e='Content Marketing'
              f='Search Marketing'
            />
          </div>
        </div>
        <div className='flex justify-center py-5'>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded shadow '>
            Browser All Services
          </button>
        </div>

        {/*-----------------------------*/}
        {/* <div className='mt-10 '>
          <div className='bg-emerald-500 h-80 py-20'>
            <h3 className='text-4xl font-bold text-center'>
              Your one-stop-shop for better business decisions
            </h3>
            <p className='text-center text-xl'>
              Tools for you, no matter where you are in your research process.
            </p>
          </div>
          <div className='-mt-16 lg:-mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-8 '>
            <BusinessCard
              heading='Search'
              desc='Browse 260K service provider'
              title='Explore our global of trusted partners from 1200+ business categories. Find the right company or service in minutes'
            />
            <BusinessCard
              heading='Find'
              desc='Narrow results and shortlist top picks'
              title='Go from thousands of options to a handful of legit contenders in a few clicks. Filter by budget industry, location and more.'
            />
            <BusinessCard
              heading='Decide'
              desc='Read in-depth verified review'
              title='Use authentic client reviews and portfolio examples to select a vetted vendor who can take on your project deliver results'
            />
          </div>
        </div> */}
        {/*--------------------------------*/}
        {/* <div className='flex justify-center gap-4 '>
          <hr class='w-96 h-1  bg-gray-100 border-0 rounded dark:bg-gray-700' />
          <FaQuoteLeft size={30} />
          <hr class='w-96  h-1  bg-gray-100 border-0 rounded  dark:bg-gray-700' />
        </div>
        <div className='p-14'>
          <h3 className='text-center font-poppins text-3xl'>
            DotMarkup made it easy to work with, interview, and select our best
            match for a talent agency. It saved our company a large amount of
            time and resources.
          </h3>
        </div> */}
        {/* ----------------------------- */}
        {/* <div className='flex flex-col lg:flex-row gap-5 px-5 py-10 lg:items-center bg-gray-400 '>
          <div className='w-full lg:w-1/2 order-last lg:order-first'>
            <div>
              <Image src={star} alt='stars' />
            </div>
            <p className='text-4xl font-bold text-gray-900'>Share your experience and make<br /> B2B buying more transparent</p>
            <div className='text-justify'>
              <h3 className='mt-8'>Leave a review of the business partners you’ve worked with over the years. Make your voice heard and help other business leaders make a confident choice.</h3>
            </div>
            <div>
              <button className='text-gray-900 border-2 border-black  hover:underline px-8 font-bold py-3 rounded-md mt-8'>Write a Review</button>
            </div>
          </div>
          <div className='w-full lg:w-1/2 order-first lg:order-last'>
            <Image src={Handshake} alt='HandShake' className='w-full' />
          </div>
        </div> */}

        {/* ---------------------------------- */}
        <div className='flex flex-col lg:flex-row gap-5 px-5 py-10 lg:items-center bg-[#17313B]'>
          <div>
            <Image src={people} alt='Handshake' className='w-[800px]' />
          </div>
          <div>
            <p className='text-[#4EBAA6] text-3xl font-semibold'>Selling B2B Services?</p>
            <p className='text-4xl font-bold text-white'>Get in Front of your Prospects</p>
            <div className='text-justify'>
              <h3 className='font-normal text-lg text-white  mt-8'>Create Profile and make sure that you are in front of your prospects</h3>
            </div>
            <div>
              <button className='text-white border-2 border-white  hover:underline px-8 font-bold py-4 rounded-md mt-8'>Create a Profile</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default index