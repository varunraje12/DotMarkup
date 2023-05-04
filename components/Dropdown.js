import React from 'react'

const Dropdown = () => {
  return (
    <>
      <label
        for='small'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Small select
      </label>
      <select className='block  p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 '>
        <option selected>Choose a country</option>
        <option value='US'>United States</option>
        <option value='CA'>Canada</option>
        <option value='FR'>France</option>
        <option value='DE'>Germany</option>
      </select>
    </>
  )
}

export default Dropdown