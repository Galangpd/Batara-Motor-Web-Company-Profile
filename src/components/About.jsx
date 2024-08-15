import React from 'react'
import image from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='px-10 sm:px-30 md:px-35 lg:px-40 max-w-screen-2xl mx-auto mb-40 py-20 mt-10' id='about'>
        <div className='mb-24 space-y-10'>
            <h1 className='text-primary font-bold text-2xl md:text-3xl text-center'>
                Tentang Kami
            </h1>
            <p className='text-center text-sm md:text-base'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam veniam accusantium autem possimus similique qui aliquam. Dolores corrupti illo libero nemo, et, odio, adipisci suscipit tenetur ducimus earum ut ad natus est. Illo distinctio eum nesciunt voluptatem voluptatum ipsa? Placeat ut labore nobis, consequatur molestias impedit fugiat officia! Nulla, libero.
            </p>
            <img src={image} alt="" className='mx-auto' />
        </div>
        <div className='space-y-10'>
            <h1 className='text-primary font-bold text-center text-2xl md:text-3xl'>
                Apa yang kami tawarkan
            </h1>
            <p className='text-center text-sm md:text-base'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus alias sit expedita error, maiores ut nesciunt eum veniam eveniet autem in fuga officiis qui voluptate, atque illo tenetur cumque. Minima.
            </p>
            <div className='flex space-x-5 justify-center h-80'>
                <div className='labelBg' style={{ backgroundImage: `url(${image2})` }}>
                    <Link key={'Product'} to={'product'} className="absolute inset-0 z-10"></Link>
                    <h2 className='label'>Product</h2>
                </div>
                <div className='labelBg' style={{ backgroundImage: `url(${image3})` }}>
                    <Link key={'Service'} to={'service'} className="absolute inset-0 z-10"></Link>
                    <h2 className='label'>Service</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About