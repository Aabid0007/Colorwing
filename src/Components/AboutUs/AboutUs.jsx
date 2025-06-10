import React from 'react'
import './AboutUs.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const AboutUs = () => {
    return (
        <>
            <div className='about_section custom-bg'>
                <div className='container'>
                    <div className=' !py-10 '>
                        <h2 className='font-bold custom-text text-center
                          md:text-[42px] lg:text-[50px] sm:text-[26px] text-[22px]'>
                            About Us
                        </h2>
                    </div>
                </div>
            </div>
            <div className='bg-color '>
                <div
                className='container'>
                    <div
                        className='flex justify-center !py-11 relative flex-col items-center'>
                        <p className='custom-text font-normal text-justify p_tag
                          xl:text-[26px] lg:text-[25px] sm:text-[18px] md:text-[20px] text-[16px] md:max-w-[961px] lg:max-w-[1226px] xl:max-w-[100%]'>
                            Colorwing is a young, vibrant and customer-focused organization,
                            whose mission is to provide superlative graphic designing, printing,
                            branding, corporate imaging and advertising services, in line with current international trends.
                            it is run by experienced and highly creative professionals, who are capable of conceptualizing,
                            publicizing and ultimately marketing clients products,
                            accroding to their specification and vision We provide competitive graphic, printing,
                            corporate imaging and advertising solutions for clients.
                            Our technical graphics team guarantees the delivery of international quality designs such that
                            the identity of your organisation is of a world class standard so as to ease the marketing of your organization.
                            We have the capacity to produce the following accroding to clients specification
                        </p>
                        <div className='right_side_img'></div>
                        <div className='middle_side_img'></div>
                        <div className='left_side_img'></div>
                    </div>
                </div>
            </div>
            <div className='custom-bg'>
                <div className='container'>
                    <div className='!py-10 '>
                        <button className='more_btn font-normal flex justify-center items-center gap-[3px]'>
                            Download Brochure
                            <span className="material-symbols-outlined">
                                north_east
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
