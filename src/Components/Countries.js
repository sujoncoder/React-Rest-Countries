import React, { useEffect, useState } from 'react'
import SingleCountry from './SingleCountry'

const Countries = () => {
    const [countries, setCountries] = useState ([])

    useEffect(()=>{
        const url = 'https://restcountries.com/v3.1/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

  return (
    <section className='bg-blue-200 px-8'>
    <h1 className='text-center text-3xl font-semibold text-slate-500 py-10'>Let's go we are visit : {countries.length}</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                countries.map(city => <SingleCountry 
                city={city}
                ></SingleCountry>)
            }
        </div>
    </section>
  )
}

export default Countries