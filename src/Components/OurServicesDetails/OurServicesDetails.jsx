import React from 'react'
import serviceDetails from './ServicesDetails'
import { motion } from 'framer-motion'
import './OurServicesDetails.css'
import { fadeIn } from '../../../variants'

const OurServicesDetails = () => {
    return (
        <div className='custom-bg'>
            <div className="container">
                <div className='!pt-[80px] !pb-[45px]'>
                    <h3 className='font-bold text-center custom-text 
                    md:text-[42px] lg:text-[50px] sm:text-[26px] text-[22px]'>Our Services</h3>
                    {serviceDetails.map((data, index) => {
                        const isEven = index % 2 === 0;
                        // Check if index is even
                        return (
                            <div className='overflow-hidden'>
                            <motion.div
                                variants={fadeIn(isEven ? 'left' : 'right', index * 0.2)}
                                initial='hidden'
                                whileInView='show'
                                viewport={{ once: false, amount: 0.1 }}
                                key={data.id}
                                className={`services_details_section flex justify-center gap-[39px]
                                ${!isEven ? 'flex-row-reverse' : ''}`}>
                                {/* Content Section */}
                                <div
                                    className={` services_content_section custom-text flex flex-col justify-between 
                                    ${!isEven ? '!pb-[60px] max-[425px]:!pb-0' : 'gap-[78px]'}`}>
                                    <h3 className='font-bold text-[32px]'>{data.heading}</h3>
                                    <p className={`font-light text-justify 
                                        ${!isEven ? 'text-[18px] max-w-[554px] small_paragraph_font ' : 'medium_paragraph_font text-[21px] max-w-[537px]'}`}>
                                        {data.description}
                                    </p>
                                    <div>
                                        <button className='more_btn font-normal flex justify-center items-center gap-[3px]'>
                                            Know more
                                            <span className="material-symbols-outlined ">
                                                north_east
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className='grid grid-cols-2 gap-[39px] services_img_section'>
                                    {data.images.map((img, imgIndex) => (
                                        <div className='relative h-fit services_img' key={imgIndex}>
                                            <img src={img.image} alt="" className='w-[260px]' loading='lazy' />
                                            <h6
                                                className={`absolute lg:text-[13px] xl:text-[16px] text-[16px] bottom-[0px] font-normal flex justify-center w-[100%] bg-[#fafafa] 
                                                ${imgIndex % 2 === 0 ? 'border_left' : 'border_right'}`}>
                                                {img.title}
                                            </h6>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurServicesDetails
