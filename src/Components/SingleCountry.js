import React from 'react'

const SingleCountry = (props) => {
  console.log(props)
  return (
    <div className='bg-slate-200 p-4 rounded-md flex flex-col justify-center items-center shadow-md shadow-green-300 hover:scale-105 duration-300'>
      
        <img className='w-56 h-40' src={props.city.flags.png} alt="" />
        <h1>Country: {props.city.name.common}</h1>
        <p>Population: {props.city.population}</p>
    </div>
  )
}

export default SingleCountry