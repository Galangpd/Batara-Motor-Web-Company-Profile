import React from 'react'
import whatsapp from '../assets/whatsapp.svg'

const Contact = () => {
  return (
    <>
    <div className='my-40 px-10 sm:px-30 md:px-35' id="gallery">
        <div className="space-y-10">
            <h1 className='text-primary font-bold text-2xl md:text-3xl text-center'>
                Contact
            </h1>
            <div className='sm:flex py-4 sm:space-x-4 sm:px-10'>
                <div className='space-y-4 w-full sm:w-1/3'>
                <h1 className='text-primary font-bold text-xl md:text-2xl'>
                    Hubungi Kami
                </h1>
                <p className='text-sm sm:text-base font-light'>
                Jika ada yang ingin Anda tanyakan seputar produk dan layanan kami, jangan sungkan untuk mengirim pesan melalui form yang disediakan. 
                Anda juga dapat menghubungi kami via telpon dan WhatsApp yang tercantum.
                </p>
                <p className='text-sm sm:text-base font-light'>
                Butuh bantuan atau informasi selengkapnya
                Hubungi lewat WhatsApp
                </p>
                <h1 className='text-lg sm:text-xl md:text-xl lg:text-2xl font-bold'>
                    088232386446
                </h1>
                <button className='bg-primary rounded-lg text-white py-2 px-4 sm:px-2 hover:bg-blue-800'>
                    <a href="https://api.whatsapp.com/send?phone=6288232386446" className='flex text-sm sm:text-base'>
                        <img src={whatsapp} alt="whatsapp" className='mr-2 w-4 sm:w-5'/>
                        Hubungi Kami
                    </a>
                </button>
                </div>
                <div className='w-full py-7 sm:py-0 sm:w-2/3'>
                <form action="" className='space-y-4'>
                    <input type="text" name='nama' className='input' placeholder='Nama'/>
                    <input type="email" name='email' className='input' placeholder='Email'/>
                    <textarea name='alamat' className='input h-32' placeholder='Alamat'/>
                    <textarea name='pesan' className='input h-32' placeholder='Pesan'/>
                    <button type='submit' className='bg-primary text-white py-1 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-800'>Kirim</button>
                </form>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Contact