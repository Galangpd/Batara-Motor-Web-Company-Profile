import logo from '../assets/logoputih.png'
import instagram from '../assets/instagram.svg'
import tiktok from '../assets/tiktok.svg'
import whatsapp from '../assets/whatsapp.svg'
import location from '../assets/location.svg'
import youtube from '../assets/youtube.svg'

const Footer = () => {
  return(
    <div className="bg-primary  max-w-screen-2xl mx-auto text-white mt-40">
        <div className='flex py-16'>
            <div className="px-1 md:px-20 py-10 md:w-1/2 space-y-5 flex-auto">
                <a href="/"> <img src={logo} alt="" className='w-40 md:w-52 lg:w-72' /> </a>
                <h1 className='font-semibold text-lg sm:text-xl md:text-2xl'>Ikuti Kami</h1>
                <div className='flex flex-wrap space-x-3'>
                    <a href="/" className='footerIcon'>
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a href="/" className='footerIcon'>
                        <img src={tiktok} alt="tiktok" />
                    </a>
                    <a href="/" className='footerIcon'>
                        <img src={youtube} alt="youtube" />
                    </a>
                </div>
            </div>
            <div className="px-1 py-10 md:w-1/3 space-y-5 flex-auto">
                <h1 className='font-semibold text-lg sm:text-xl md:text-2xl mb-12'>Menu</h1>
                    <ul>
                        <li><a href="/" className='menuFooter'>Home</a></li>
                        <li><a href="/product" className='menuFooter'>Product</a></li>
                        <li><a href="/service" className='menuFooter'>Service</a></li>
                        <li><a href="/gallery" className='menuFooter'>Gallery</a></li>
                        <li><a href="/contact" className='menuFooter'>Contact</a></li>
                    </ul>
            </div>
            <div className="px-1 py-10 md:w-1/2 space-y-5 flex-auto">
                <h1 className='font-semibold text-lg sm:text-xl md:text-2xl'>Hubungi Kami</h1>
                <div className='flex'>
                    <img src={whatsapp} alt="" className='hidden sm:block w-6 md:w-[30px]'/>
                    <div className='mx-2'>
                        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold mt-8'>Contact</h1>
                        <p className='font-light mt-3 text-sm sm:text-base'>088232386446</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={location} alt="" className='hidden sm:block w-6 md:w-[30px]'/>
                    <div className='mx-2'>
                        <h1 className='text-lg sm:text-xl md:text-2xl font-semibold mt-8'>Address</h1>
                        <p className='font-light mt-3 text-sm sm:text-base'>Jl. Nyangkringan 0,2</p>
                        <p className='font-light mt-1 text-sm sm:text-base'>Sleman Yogyakarta</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='py-5 border-t-[1px] border-slate-400'>
            <p className="font-light text-center text-sm sm:text-base">Dibuat oleh <a href="https://www.linkedin.com/in/galang-pakusadewa/" target="_blank" class=" hover:opacity-80">Galang Pakusadewa</a></p>
        </div>
    </div>
  )
}

export default Footer