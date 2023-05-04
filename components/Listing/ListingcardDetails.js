import React from 'react'
import ReactStars from "react-stars";
import Image from 'next/image';
import { GiWallet } from "react-icons/gi";
import { WiTime9 } from "react-icons/wi";
import { IoIosPeople } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import logo from '../../public/Digital-Silk-logo-listing.jpg'

const ListingcardDetails = ({ detail }) => {
  return (
    <>
      <div className='flex flex-col md:flex-row bg-white rounded-sm w-full'>
        {/********************* */}
        <div className='w-full md:w-2/5  p-3'>
          <div className='font-poppins font-bold text-2xl text-[#5060FF]'>{detail?.company_title}</div>

          {/* <span className="flex gap-3 text-center pb-3">
            <ReactStars count={5} size={24} color2={"#ffd700"} />
            <div className="flex justify-center items-center text-orange-400">{(Math.random() * (5 - 3) + 3).toFixed(1)}</div>
          </span> */}
          <p>{detail?.description}</p>
          {/* <button className='text-red-400 text-xs mt-4'>Read More...</button> */}
        </div>
        {/****************************/}
        <div className='w-full md:w-1/5 p-3'>
          <h2 className='text-md text-red-400'>Basics</h2>

          <div className='flex gap-2'>
            <IoIosPeople size={20} />
            {detail?.list_item_3}
          </div>
          <div className='flex gap-2'>
            <WiTime9 size={20} />
            {detail?.list_item_2}
          </div>
          {
            detail?.list_item ?
              <div className='flex gap-2'>
                <GiWallet size={20} />
                {detail?.list_item}
              </div> : <div className='flex gap-2'><GiWallet size={20} /> $1,000+</div>
          }
        </div>
        {/********************************/}
        <div className='w-full md:w-2/5 p-3'>
          <div className='flex gap-2 text-center'>
            <ImLocation size={20} />
            {detail?.locality}
          </div>
          <Image
            alt='Company logo'
            src={`/Image/${detail?.company_title?.includes(' ') ? detail?.company_title.split(' ').join('_') : detail?.company_title}.png`}
            width={80}
            height={80}
            className='object-contain'
          />
        </div>
      </div>
    </>
  )
}

export default ListingcardDetails