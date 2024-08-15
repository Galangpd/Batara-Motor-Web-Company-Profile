import banner from '../assets/banner.png'
import { Link } from 'react-scroll'

const Banner = ({welcome, heading, subheading, btn}) => {
  return (
    <div>
        <div className='w-full'>
            <div className="mt-10 bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="ml-11 md:ml-24 lg:ml-36">
                        <h2 className='text-slate-900 text-3xl md:text-4xl lg:text-6xl font-bold py-4'>{welcome}</h2>
                        <h1 className='text-primary text-5xl md:text-5xl lg:text-7xl font-extrabold py-4'>{heading}</h1>
                        <h3 className='text-slate-900 text-2xl md:text-2xl lg:text-3xl font-semibold py-4'>{subheading}</h3>
                        <div className='py-4'>
                        <Link to="about" smooth={true} duration={600}>
                            <button className='btnPrimary'>{btn}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Banner;