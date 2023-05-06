import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5'
import { AiFillTool } from 'react-icons/ai'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { BsDatabaseFillAdd } from 'react-icons/bs'
import { useRouter } from "next/router";


function CardCarousel({ details }) {
  const router = useRouter()
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
        }}

        breakpoints={{
          // when window width is >= 640px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}

      >
        {details.map((detail, index) => {


          return (<SwiperSlide key={index}>
            <div onClick={() => {
              router.push(`/biz/` + detail.company_title);
            }} className='flex justify-between min-h-[270px] max-h-[270px] bg-white hover:border-[#5060FF] border-[2px] rounded-sm w-full cursor-pointer'>
              <div className='w-1/2 p-2'>
                <Image src={`/Image/${detail?.company_title?.includes(' ') ? detail?.company_title.split(' ').join('_') : detail?.company_title}.png`}
                  alt="logo"
                  width={80}
                  height={80}
                  className=' object-cover'
                />
                <p className='font-bold text-xl p-2 tracking-tight text-gray-900 dark:text-black'>{detail?.company_title}</p>
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
                <p className="truncate-2-line p-6">{detail?.description}</p>
                <div className='border border-gray-400 p-2 mt-3 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </SwiperSlide>)
        })}
      </Swiper>
    </>
  );
}

export default CardCarousel;
