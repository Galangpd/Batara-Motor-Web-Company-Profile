import React from 'react'
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"

const Product = () => {
  return (
    <>
    <div className='my-40 px-10 sm:px-30 md:px-35 lg:px-40' id="product">
        <div className="space-y-10">
            <h1 className='text-primary font-bold text-2xl md:text-3xl text-center'>
                Produk yang kami sediakan
            </h1>
            <p className='text-center text-sm md:text-base'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis necessitatibus, voluptas odio veritatis, sunt vel, exercitationem corporis libero et fugit molestias? Blanditiis eveniet non consequuntur possimus illo, consectetur officia expedita?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 place-content-center max-w-5xl mx-auto">
                <div className="cardProduct">
                    <img src={product1} alt="product1" />
                    <p className="text-center py-3 text-sm md:text-base">Oli</p>
                </div>
                <div className="cardProduct">
                    <img src={product2} alt="product2"/>
                    <p className="text-center py-3 text-sm md:text-base">Ban</p>
                </div>
                <div className="cardProduct">
                    <img src={product3} alt="product3" />
                    <p className="text-center py-3 text-sm md:text-base">Filter</p>
                </div>
                <div className="cardProduct">
                    <img src={product4} alt="product4"/>
                    <p className="text-center py-3 text-sm md:text-base">Coolant</p>
                </div>
                <div className="cardProduct">
                    <img src={product5} alt="product5"/>
                    <p className="text-center py-3 text-sm md:text-base">Alat alat</p>
                </div>
                <div className="cardProduct">
                    <img src={product6} alt="product6"/>
                    <p className="text-center py-3 text-sm md:text-base">Accu</p>
                </div>
                <div className="cardProduct col-start-1 col-end-3 sm:col-end-4">
                    <img src={product7} alt="product7" />
                    <p className="text-center py-3 text-sm md:text-base">Berbagai macam sparepart</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product