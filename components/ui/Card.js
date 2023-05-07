import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Card = (props) => {
  return (
    <>
      <div className='w-auto p-6 bg-white border border-gray-200 hover:border-blue-500 rounded-xl shadow dark:bg-white'>
        <div>
          <div className='flex gap-3'>
            {/* <div>
              <Image src={props.icon} alt=' picture' width={60} height={60} />
            </div> */}
            <div>
              <h2 className='font-bold text-2xl ml-20 tracking-tight text-gray-900 dark:text-black'>
                {props?.heading}
              </h2>
            </div>
          </div>
        </div>
        <div className='text-start ml-24 '>
          <Link href='' className='text-blue-500 hover:underline'>
            {props?.a}
          </Link>
        </div>
        <div className='text-start ml-24 m-3'>
          <Link href='/seo' className='text-blue-500 hover:underline'>
            {props?.b}
          </Link>
        </div>
        <div className='text-start ml-24 m-3'>
          <Link href='' className='text-blue-500 hover:underline'>
            {props?.c}
          </Link>
        </div>
        <div className='text-start ml-24 m-3'>
          <Link href='' className='text-blue-500 hover:underline'>
            {props?.d}
          </Link>
        </div>
        <div className='text-start ml-24 m-3'>
          <Link href='' className='text-blue-500 hover:underline'>
            {props?.e}
          </Link>
        </div>
        <div className='text-start ml-24 m-3'>
          <Link href='' className='text-blue-500 hover:underline'>
            {props?.f}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Card