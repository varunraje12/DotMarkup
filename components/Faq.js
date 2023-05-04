import { useState } from "react"
import { SlArrowDown } from 'react-icons/sl'
import { SlArrowUp } from 'react-icons/sl'


const Faq = () => {
  const [expand, setExpand] = useState(false)
  const expandClass = expand ? 'display' : 'hidden';
  const ansClass = `${expandClass} p-4`

  return (
    <>
      <div className="flex justify-center p-4">
        <div className='w-4/5 md:5/6 lg:w-3/6 hover:shadow-md rounded-sm border bg-white hover:border-blue-500 '>
          <div className='p-4 text-xl relative font-medium'>
            How are you ?
            <button className="text-xl absolute top-0 right-0 p-4 text-center"
              onClick={() => setExpand(!expand)}>{
                expand ?
                  <div className="flex items-center justify-center justify-items-center">
                    <SlArrowUp className="w-5" />
                  </div>
                  :
                  <div className="flex items-center justify-center justify-items-center">
                    <SlArrowDown className="w-5 " />
                  </div>
              }
            </button>
          </div>
          <div className={ansClass}>
            Good Enough
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq