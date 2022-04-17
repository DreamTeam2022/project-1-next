import React from 'react'

const Button = (props) => {
  return (
    <button className=' font-[Poppins] px-8 lg:px-10 py-2 lg:py-4 text-lg xl:text-xl   bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-800 hover:via-blue-300 hover:to-blue-600 focus:outline-none text-white rounded-lg  shadow-lg drop-shadow-lg shadow-blue-500/80'>
      {props.name}
    </button>
  )
}

export default Button