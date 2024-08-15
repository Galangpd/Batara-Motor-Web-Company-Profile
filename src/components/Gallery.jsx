import React from 'react'
import gallery from "../assets/gallery.png"

const Gallery = () => {
  return (
    <>
    <div className='my-40 px-10 sm:px-30 md:px-35 lg:px-40' id="gallery">
        <div className="space-y-10">
            <h1 className='text-primary font-bold text-2xl md:text-3xl text-center'>
                Gallery
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5 place-content-center max-w-5xl mx-auto">
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
                <div className='hover:scale-105'>
                    <img src={gallery} alt="gallery" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Gallery