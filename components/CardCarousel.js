import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import logo from '../public/Digital-Silk-logo-listing.jpg'
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillTool } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsDatabaseFillAdd } from 'react-icons/bs'
import { useRouter } from "next/router";

function CardCarousel({ detail }) {
  const router = useRouter()
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={3}
        // loop={true}
        onAutoplayResume={true}
      >
        <SwiperSlide>
          <>
            <div onClick={() => {
              router.push(`/biz/` + detail.company_title);
            }} className='flex justify-between items-center bg-white hover:border-[#5060FF] border-[2px] rounded-sm w-full cursor-pointer'>
              <div className='w-1/2 p-2'>
                <Image src={`/Image/${detail?.company_title?.includes(' ') ? detail?.company_title.split(' ').join('_') : detail?.company_title}.png`}
                  alt="logo"
                  width={80}
                  height={80}
                  className='object-contain'
                />
                <p className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>{detail?.company_title}</p>
                <div className='flex gap-2'>
                  <IoLocationSharp className='mt-1 ' />
                  <p>{detail?.locality}</p>
                </div>
                <div className='flex gap-2'>
                  <AiFillTool className='mt-1 ' />
                  <p>{detail?.list_item_3}</p>
                </div>
                <div className='flex gap-2'>
                  <BsFillBriefcaseFill className='mt-1 ' />
                  <p>{detail?.list_item_2}</p>
                </div>
                <div className='flex gap-2'>
                  <BsDatabaseFillAdd className='mt-1 ' />
                  <p>{detail?.list_item}</p>
                </div>
              </div>

              <div className='w-1/2 p-2'>
                <p className="truncate-2-line">{detail?.description}</p>
                <div className='border border-gray-400 p-2 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
      </Swiper >
    </>
  );
}

export default CardCarousel;
