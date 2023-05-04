import React from 'react'
import Image from 'next/image'

const BusinessCard = (props) => {
  return (
    <div className='w-auto p-6 bg-[#17313B] border border-gray-200 hover:border-blue-500 rounded-xl shadow'>
      <div>
        <h3 className='text-xl tracking-tight text-emerald-500 '>
          {props?.heading}
        </h3>
      </div>
      <p className='text-2xl pt-2 text-white font-semibold'>{props?.desc}</p>
      <p className='text-white pt-2'>{props?.title}</p>
    </div>
  )
}

export default BusinessCard