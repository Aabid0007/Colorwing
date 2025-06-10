import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';

const Footer = () => {
    return (
        <>
            {/* Footer for Desktop */}
            <footer className='desktop_screen_footer'>
                <div className='custom-bg footer_header'>
                    <div className='container'>
                        <div className='footer_title flex justify-between !pt-[30px] !pb-[6px] '>
                            <h4>Contact  us</h4>
                            <h4>Our services</h4>
                            <h4>Follow us on</h4>
                        </div>
                    </div>
                </div>
                <div className='bg-color footer-border'>
                    <div className='container'>
                        <div className='flex justify-between custom-text items-center !py-[32px]'>
                            <motion.h3
                                variants={fadeIn('left', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: true, amount: 0.3 }}
                                className='font-extraligh 
                            lg:text-[22px] md:text-[20px] sm:text-[9px]
                            lg:max-w-[293px] md:max-w-[264px] sm:max-w-[124px]'>
                                +971 56 503 7734
                                info@colorwingads.com
                                Dubai-UA
                            </motion.h3>
                            <nav>
                                <motion.ul 
                                variants={fadeIn('up', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: true, amount: 0.3 }}
                                className='list-disc !pl-[9px]'>
                                    <li className='list_item'>Indoor & Outdoor Branding</li>
                                    <li className='list_item'>Paper Bags & Boxes</li>
                                    <li className='list_item'>Corporate & Promotional Gifts</li>
                                    <li className='list_item'>Flags & Banners</li>
                                    <li className='list_item'>Office Stationary</li>
                                </motion.ul>
                            </nav>
                            <motion.div
                            variants={fadeIn('right', 0.2)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{ once: true, amount: 0.3 }}
                            className='footer_icons flex lg:gap-[26px] items-center md:gap-[19px] gap-[18px]'>
                                <i className="fa-brands fa-facebook-f font-custom "></i>
                                <i className="fa-brands fa-whatsapp font-custom !text-[20px"></i>
                                <i className="fa-brands fa-instagram  instagram_icon"></i>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer for Mobile */}
            <footer className='mobile_screen_footer'>
                <div className='bg-color footer-border'>
                    <div className='container'>
                        <div className=' flex flex-col gap-[30px] custom-text !py-[32px]'>
                            <div className='card_list_header'>
                                <h3>Contact  us</h3>
                                <h4 className='font-extraligh text-[16px] max-w-[196px]'>
                                    +971 56 503 7734
                                    info@colorwingads.com
                                    Dubai-UA
                                </h4>
                            </div>
                            <nav className='card_list_header'>
                                <h3>Our services</h3>
                                <ul className='list-disc !pl-[16px]'>
                                    <li className='list_item'>Indoor & Outdoor Branding</li>
                                    <li className='list_item'>Paper Bags & Boxes</li>
                                    <li className='list_item'>Corporate & Promotional Gifts</li>
                                    <li className='list_item'>Flags & Banners</li>
                                    <li className='list_item'>Office Stationary</li>
                                </ul>
                            </nav>
                            <div className='card_list_header'>
                                <h3>Follow us on</h3>
                                <div className='footer_icons flex lg:gap-[26px] items-center md:gap-[19px] gap-[18px]'>
                                    <i className="fa-brands fa-facebook-f font-custom "></i>
                                    <i className="fa-brands fa-whatsapp font-custom !text-[20px"></i>
                                    <i className="fa-brands fa-instagram  instagram_icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='bg-color'>
                <div className="container">
                    <div className='!py-[15px] flex justify-center'>
                        <h6 className='footer_end font-extralight text-[16px]'>© 2025 Colorwing. All rights reserved.</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer