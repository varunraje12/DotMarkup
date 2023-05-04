import React from 'react'

const FullPageLoader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>

      <div className="flex items-center justify-center space-x-2 animate-bounce">
        <div className="w-8 h-8 bg-primary rounded-full"></div>
        <div className="w-8 h-8 bg-warning rounded-full"></div>
        <div className="w-8 h-8 bg-black rounded-full"></div>
      </div>
    </div>
  )
}

export default FullPageLoader