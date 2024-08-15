import banner from "../assets/bannerService.png"
import service1 from "../assets/service1.png"
import service2 from "../assets/service2.png"
import service3 from "../assets/service3.png"
import service4 from "../assets/service4.png"
import service5 from "../assets/service5.png"
import service6 from "../assets/service6.png"

const Service = () => {
  return (
    <>
    <div className='my-40 px-10 sm:px-30 md:px-35 lg:px-40' id="service">
        <div className="space-y-10">
            <h1 className='text-primary font-bold text-2xl md:text-3xl text-center'>
                Layanan Service
            </h1>
            <p className='text-center text-sm md:text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nesciunt nobis? Harum totam dolores mollitia at consequuntur omnis eum sint qui, officiis voluptatem quas est obcaecati eos quisquam vitae, deserunt, dolor distinctio consectetur non ea dignissimos iure nihil debitis. Est.
            </p>
            <img src={banner} alt="" className='mx-auto' />
        </div>
        <div className="my-24 space-y-10">
            <h1 className='text-primary font-bold text-2xl md:text-3xl text-center'>
                Layanan Kami
            </h1>
            <p className='text-center text-sm md:text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus, voluptas odio veritatis, sunt vel, exercitationem corporis libero et fugit molestias? Blanditiis eveniet non consequuntur possimus illo, consectetur officia expedita?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 place-content-center max-w-5xl mx-auto">
                <div className="cardService">
                    <img src={service1} alt="service1" />
                    <p>Ganti Oli</p>
                </div>
                <div className="cardService">
                    <img src={service2} alt="service2" />
                    <p>Ganti Ban</p>
                </div>
                <div className="cardService">
                    <img src={service3} alt="service3" />
                    <p>Tune Up</p>
                </div>
                <div className="cardService">
                    <img src={service4} alt="service4" />
                    <p>Service Kaki kaki</p>
                </div>
                <div className="cardService">
                    <img src={service5} alt="service5" />
                    <p>Kelistrikan</p>
                </div>
                <div className="cardService">
                    <img src={service6} alt="service6" />
                    <p>AC</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service