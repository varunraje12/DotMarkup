import React from 'react'
import { GiWallet } from "react-icons/gi";
import { WiTime9 } from "react-icons/wi";
import { IoIosPeople } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { ImLocation } from "react-icons/im";

const Review = () => {
  return (
    <>
      <div className='flex mt-5'>
        <div className='bg-gray-800 w-full p-4'>
          <div className='bg-green-500 rounded-sm inline-block'>
            <p className='p-1'>Featured Review</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row">
        <div className='w-full lg:w-1/4 bg-white p-4'>
          <h2>The Product</h2>
          <div className='flex mt-2'>
            <IoIosPeople size={20} />
            30-50
          </div>
          <div className='flex'>
            <WiTime9 size={20} />
            $100 - $149 / hr
          </div>
          <div className='flex'>
            <GiWallet size={20} />
            $1,000+
          </div>
          <hr className='p-3' />
          <h2>Project Summary</h2>
          <p>Naked. is designing and developing a mobile app that provides a digital place to settle disputes. The vendor has developed a digital wallet feature to hold gift cards given to the winner of the dispute.</p>
        </div>
        <div className='flex w-full lg:w-1/2 border-2 boredr-l text bg-white'>
          <div className='p-4'>
            <h2 className='text-gray-400 text-sm m-3'>THE REVIEW</h2>
            <h2>They started to feel just like family after the second or third meeting</h2>
            <h2 className='text-gray-400 text-sm m-3'>JUN 20, 2022</h2>
            <hr />
            <div className='w-full p-3'>
              <h2>Feedback summary:</h2>
              <p>Effectively listening to the client needs, Naked. is developing an effective dispute-resolution tool. They have accurately created the clients vision thanks to their ability to put themselves in their clients shoes. Customers can expect a professional partner that is wide open to changes. </p>
            </div>
          </div>
          <div className='flex'>
            <p className='flex justify-center p-7'><span className='text-orange-500 font-medium text-md'>5.0</span>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
        <div className='w-full lg:w-1/4 bg-white'>
          <div className='p-4'>
            <h2 className='text-gray-400 text-sm m-3'>THE REVIEW</h2>
            <h2 className='text-2xl'>CEO and Founder, McCoy Kreations</h2>
            <div>

            </div>
            <hr />
            <div className='w-full mt-4'>
              <div className='flex'>
                <IoIosPeople size={20} />
                30-50
              </div>
              <div className='flex'>
                <WiTime9 size={20} />
                $100 - $149 / hr
              </div>
              <div className='flex'>
                <ImLocation size={20} />
                Charlotte, North Carolina
              </div>
              <div className='flex'>
                <MdVerified size={20} />
                Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review