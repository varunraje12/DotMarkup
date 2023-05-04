import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import { AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";

const Footor = () => {
  return (
    <>
      <div className='bg-white'>
        <div className="container mx-auto px-4 py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div>
              <Image src={logo} alt="logo" className='h-16 w-44 object-contain' />
              <p className="text-xl font-semibold">DotMarkup</p>
              <p>Site FeedBack</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">About Dot Mark Up</h3>
              <div className="flex flex-col gap-2 py-2 text-gray-800">
                <Link href='/'>Our Story</Link>
                {/* <Link href='/'>Careers</Link>
                <Link href='/'>News & Press</Link>
                <Link href='/'>Research Methodology</Link> */}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Buyers</h3>
              <div className="flex flex-col gap-2 py-2 text-gray-800">
                <Link href='/'>Browse All Directories</Link>
                <Link href='/'>Review Service Provider</Link>
                <Link href='/'>Review to Donate</Link>
                <Link href='/'>Blog & Industry Surveys</Link>
                <Link href='/'>Concierge Service</Link>
                <Link href='/'>Buyer FAQs</Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Service Provider</h3>
              <div className="flex flex-col gap-2 py-2 text-gray-800">
                <Link href='/'>Service Provider Guide</Link>
                <Link href='/'>Get Listed</Link>
                <Link href='/'>Get Noticed</Link>
                <Link href='/'>Marketing Opportunities</Link>
                <Link href='/'>Service Provider FAQs</Link>
              </div>
            </div>
          </div>
          <hr className="" />
          <div className='flex flex-col lg:items-center lg:flex-row lg:justify-between'>
            <div className='flex flex-col lg:flex-row gap-3 text-gray-800'>
              <h3>Privacy Policy</h3>
              <h3>Term of Service</h3>
              <h3 className='cursor-pointer'>2023 DotMarkup <span>&#169;</span>All rights reserved</h3>
            </div>
            <div className="flex items-center justify-start lg:justify-end gap-6 pt-3">
              <a href=""><AiOutlineInstagram size={40} className='text-pink-500 bg-white cursor-pointer' /></a>
              <a href=''><TfiLinkedin size={40} className='text-blue-700 bg-white  cursor-pointer' /></a>
              <a href=""> <AiFillYoutube size={40} className='text-red-500 bg-white  cursor-pointer' /></a>
              <a href=""> <AiOutlineTwitter size={40} className='text-blue-500 bg-white cursor-pointer' /></a>
              <a href=""> <FaFacebookF size={40} className='text-blue-500 bg-white cursor-pointer' /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footor