import { IoLocationSharp } from 'react-icons/io5'
import { AiFillTool } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsDatabaseFillAdd } from 'react-icons/bs'
import Image from 'next/image'
import logo from '../public/cardlogo.jpg'

export const ListingCard1 = () => {
  return (
    <div>
      <div className='w-auto p-6 bg-white border border-gray-200 hover:border-blue-500 rounded-xl shadow dark:bg-white'>
        <div>
          <div className='flex gap-3'>
            <div>
              <Image src={logo} alt=' picture' width={60} height={60} />
            </div>
            <div>
              <h5 className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>
                Campaign Arc
              </h5>
              <p className=' font-normal text-gray-700 dark:text-gray-400'>
                Shaping Success, One Curve at a Time
              </p>
            </div>
          </div>
        </div>
        <p className='mb-3 font-normal text-black-700 dark:text-black-400 mt-4'>
          Here are the biggest enterprise technology acquisitions of 2021 so far
          Here are the biggest enterprise technology acquisitions of 2021 so far
          Here are the biggest enterprise technology acquisitions of 2021 so far
          Here are the biggest enterprise technology acquisitions of 2021 so far
        </p>
        <div className=''>
          <div className='flex gap-2'>
            <IoLocationSharp className='mt-1 ' />
            <p className=''>Unite State</p>
          </div>

          <div className='flex gap-2'>
            <AiFillTool className='mt-1 ' />
            <p className=''>Advertising, Display Ads +23 </p>
          </div>
          <div className='flex gap-2'>
            <BsFillBriefcaseFill className='mt-1 ' />
            <p className=''>B2B Services, Healthcare & Hospital +3</p>
          </div>
          <div className='flex gap-2'>
            <BsDatabaseFillAdd className='mt-1 ' />
            <p className=''>Any</p>
          </div>
          <div className='bg-blue-400 text-center text-white py-2 rounded-sm uppercase cursor-pointer mt-3'>
            View Website
          </div>
          <div className='flex gap-2 mt-2 rounded-md text-center text-blue-400'>
            <div className='w-1/2 border border-gray-400 p-2 uppercase cursor-pointer'>
              View Profile
            </div>
            <div className='w-1/2 border border-gray-400 p-2 uppercase cursor-pointer'>
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard1