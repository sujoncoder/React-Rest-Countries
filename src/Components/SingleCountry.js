import React from 'react'

const SingleCountry = ({city}) => {
  const {name, flags, population} = city 
  return (
    <div className='bg-slate-200 p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-green-300 hover:scale-105 duration-300'>
      
        <img className='w-56 h-40 rounded mb-1' src={flags.png} alt="" />
        <h1 className='text-lg'>Country: <span className='text-xl text-blue-600'>{name.common}</span></h1>

        <p className='text-lg'>Population: <span className='text-2xl text-orange-600'>{population}</span></p>
    </div>
  )
}

export default SingleCountry