import React from 'react'
import Link from 'next/link'


const data = [
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },
  {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  }, {
    name: 'Top Web Designers in California',
    link: 'https://clutch.co/web-designers/california'
  },

]


const ServiceProvider = () => {
  return (
    <>
      <div>
        <div className='grid sm:grid-cols-1 md:grid-cold-2 lg:grid-cols-3 cursor-pointer text-blue-400 font-normal bg-white p-6'>
          {data?.map((data, index) => {
            return (
              <>
                <div className='text-center'>
                  <Link key={index} className='hover:underline' href={data?.link}>{data?.name}</Link>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ServiceProvider