import React from 'react'
import carouselBg1 from "../../assets/Group 43.png"
import carouselBg2 from "../../assets/Group 42.png"
import logo from "../../assets/Ellipse 2.png"
import './ClientCarousel.css'

const ClientCarousel = () => {

    return (
        <div className='custom-bg'>
            <div className='container'>
                <div className='flex justify-center gap-[40px] flex-col !pb-[80px]'>
                    <h3 className='font-bold text-center custom-text
                            md:text-[42px] lg:text-[50px] sm:text-[26px] text-[22px]'>
                        Client say about us
                    </h3>
                    <div className='flex justify-center relative items-center'>
                        <img src={carouselBg1} alt="" className='carousel_img1 absolute max-w-[90%]' />
                        <div className=' flex justify-around relative max-w-[88%] '>
                            <img src={carouselBg2} alt="" className='carousel_img2  relative' />
                            <div className='carousel_content_section absolute !px-[21px] bottom-[20px] flex flex-col gap-[40px]'>
                                <p className='custom-text font-normal  text-justify
                                    lg:text-[26px] lg:max-w-[946px]'>
                                    "We needed high-quality brochures for our event,
                                    and Colorwing delivered beyond expectations!
                                    The colors were vibrant, and the paper quality was premium.
                                    Highly recommend their services!
                                </p>
                                <div className='reviewed_by flex items-center gap-[10px]'>
                                    <img src={logo} alt="" className='w-[55px]' />
                                    <span>
                                        <h2 className='custom-text font-semibold text-[20px]'>
                                            Leslie Alexander
                                        </h2>
                                        <h6 className='custom-text font-semibold text-[12px]'>
                                            CEO of BENCHMARK
                                        </h6>
                                    </span>
                                </div>
                                <div className='slide_btn flex justify-center gap-[10px] bottom-[-36px]'>
                                    <span className='small_width'></span>
                                    <span className='medium_width'></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientCarousel