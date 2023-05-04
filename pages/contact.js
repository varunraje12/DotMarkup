import Image from 'next/image'
import React from 'react'
import svg from '../public/man.svg'
import { useRouter } from 'next/router'
import Head from "next/head";
function Contact() {
  const router = useRouter()
  console.log(router)
  return (
    <>
      {/* first div */}
      <Head>
      <meta name="robots" content="noindex,nofollow"></meta>
      </Head>
      <div className='flex justify-center bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 h-96 w-full '>
        <h1 className='flex items-center text-center text-5xl font-bold text-white'>
          Contact Expert Reputation
        </h1>
      </div>
      {/* second div */}
      <div className='flex flex-col lg:flex-row justify-center items-center  '>
        <div className='w-full lg:w-2/4 order-last lg:order-first'>
          <div className='flex items-center'>
            <div className='w-1/3'>
              <Image
                className='w-28 md:w-32 lg:w-48'
                src={svg}
                alt=''
                width={150}
                height={100}
              />
            </div>
            <div className='w-2/3 items-center'>
              <div>
                <h2 className='text-md md:text-3xl font-bold '>
                  You Can Receive Proposals From Up To 5 Verified Agencies
                </h2>
                <p className=' text-lg md:text-xl leading-normal mt-4'>
                  Tell us about your project and we will connect you with up to
                  5 verified agencies having the most competitive proposals
                  based on your criteria and goals.
                </p>
                <button
                  type='submit'
                  className='text-white bg-blue-700 hover:bg-blue-800 font-semibold rounded-full text-md px-5 md:px-6 py-3 mt-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Submit Your Project For<span className='uppercase'> Free {'>'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-2/4 p-10 -mt-20'>
          <div className='shadow-lg p-4 rounded-md bg-white '>
            <form>
              <div className=''>
                <div>
                  <h2 className='text-2xl text-md font-bold py-5 mx-3'>
                    Get in direct touch with Expert Reputation
                  </h2>
                </div>
                <div className='p-2'>
                  <input
                    type='text'
                    id='name'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-md font-normal rounded-sm  block w-full p-2.5   dark:placeholder-black hover:border-[#5060FF] focus:outline-[#5060FF]'
                    placeholder='Your Name *'
                    required
                  />
                </div>
                <div className='p-2'>
                  <input
                    type='email'
                    id='email'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-md font-normal rounded-sm  block w-full p-2.5   dark:placeholder-black hover:border-[#5060FF] focus:outline-[#5060FF]'
                    placeholder='Email *'
                    required
                  />
                </div>
                <div className='p-2'>
                  <input
                    type='text'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-md font-normal rounded-sm  block w-full p-2.5   dark:placeholder-black hover:border-[#5060FF] focus:outline-[#5060FF]'
                    placeholder='Company Name *'
                    required
                  />
                </div>
                <div className='p-2'>
                  <input
                    type='number'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-md font-normal rounded-sm  block w-full p-2.5   dark:placeholder-black hover:border-[#5060FF] focus:outline-[#5060FF]'
                    placeholder='Phone Number *'
                    required
                  />
                </div>
                <div className='p-2'>
                  <input
                    type='text'
                    className='shadow-sm bg-gray-50 border border-gray-300 text-black text-md font-normal rounded-sm  block w-full p-2.5   dark:placeholder-black hover:border-[#5060FF] focus:outline-[#5060FF]'
                    placeholder='Website URL *'
                    required
                  />
                </div>
                <div className='p-2'>
                  <textarea
                    id='message'
                    rows='4'
                    className='block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 hover:border-[#5060FF] focus:outline-[#5060FF]'
                    placeholder='Write your thoughts here...'
                  ></textarea>
                </div>
                <div className='flex p-2 mb-6'>
                  <div className='flex items-center h-5'>
                    <input
                      id='terms'
                      type='checkbox'
                      value=''
                      className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                      required
                    />
                    <h2 className='pl-2'>
                      Send a copy of this message to my email
                    </h2>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <label
                    for='terms'
                    className='ml-2 text-sm font-medium text-black'
                  >
                    I agree with the{' '}
                    <a
                      href='#'
                      className='text-blue-600 hover:underline'
                    >
                      terms and conditions
                    </a>
                  </label>
                  <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-8 py-2.5 text-center'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* third div */}
      <div className='flex justify-between p-8 bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
        <div className='3/4 '>
          <h2 className='text-3xl text-blue-800 font-bold p-2'>
            Sign Up for Our Newsletter
          </h2>
          <p className='text-xl  text-blue-800 p-2'>
            Receive the Latest Digital Trends & Best Web, App & Logo Design
            Award Winners
          </p>

          <div className='flex flex-col md:flex-row p-2 gap-2  '>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-5 h-5 text-blue-300 dark:text-blue-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    sstrokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='email-address-icon'
                className='bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-white dark:placeholder-gray-700 outline-none'
                placeholder='Your Name'
              />
            </div>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 text-blue-300 dark:text-blue-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                </svg>
              </div>
              <input
                type='text'
                id='email-address-icon'
                className='bg-gray-50 border border-gray-300 text-sm rounded  block w-full pl-10 p-2.5  dark:bg-white dark:placeholder-gray-700 outline-none'
                placeholder='Your Email'
              />
            </div>
            <button
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-semibold rounded-md text-sm px-8 py-2.5 text-center uppercase'
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className='1/4'></div>
      </div>
    </>
  )
}

export default Contact