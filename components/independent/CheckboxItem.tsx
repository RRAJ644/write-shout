import React from 'react'

type CheckboxItemProps = {
  id: string
  label: string
  isChecked: boolean
  onChange: () => void
}

const CheckboxItem = ({
  id,
  label,
  isChecked,
  onChange,
}: CheckboxItemProps) => {
  return (
    <li className='flex items-center space-x-3 group'>
      <input
        type='checkbox'
        id={id}
        className='w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-lg cursor-pointer focus:ring-blue-500 focus:ring-2 transition-transform transform group-hover:scale-110'
        checked={isChecked}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className='text-lg md:text-xl text-neutral-50 cursor-pointer group-hover:text-blue-600 transition-colors'
      >
        {label}
      </label>
    </li>
  )
}

export default CheckboxItem
