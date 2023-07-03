import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} className='w-[500px] mx-auto
            ' alt="laptop alt" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBORD</p>
                <h1 className='md:4xl sm:3xl text-2xl font-bold py-2'>MANAGE Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, a labore dolor quidem quam quisquam. Adipisci, harum. Tempore et molestiae at odit amet quae quod! Distinctio repudiandae voluptatum similique ducimus.</p>
                <button className='text-[#00df9a] bg-black w-[200px] my-6 py-3 rounded-md font-medium'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Analytics