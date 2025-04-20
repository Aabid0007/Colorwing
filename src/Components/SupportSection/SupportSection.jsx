import React from 'react'
import './SupportSection.css'

const SupportSection = () => {
    return (
        <div className='custom-bg'>
            <div className="container">
                <div className='support_section grid grid-cols-2 gap-[68px]'>
                    <div className='custom-text flex flex-col gap-[100px] max-[769px]:gap-[80px]'>
                        <h3 className='font-normal text-[52px] max-w-[545px]'>
                            We are always ready to help you and answer your question
                        </h3>
                        <div className='contact_section grid grid-cols-2 gap-[38px]'>
                            <div className='contact_section_block flex flex-col gap-[30px]'>
                                <h6 className='section-heading'>Call centre</h6>
                                <div className='flex flex-col gap-[2px]'>
                                    <span className='section_text'>+971 509374377</span>
                                    <span className='section_text '>+971 56 503 7734</span>
                                </div>
                            </div>
                            <div className='contact_section_block flex flex-col gap-[30px]'>
                                <h6 className='section-heading'>Our Location</h6>
                                <span className='section_text'>Al Quisais dubai uae </span>
                            </div>
                            <div className='contact_section_block flex flex-col gap-[30px]'>
                                <h6 className='section-heading'>E-Mail</h6>
                                <span className='section_text '>info@colorwingads.com</span>
                            </div>
                            <div className='contact_section_block flex flex-col gap-[30px]'>
                                <h6 className='section-heading '>Social network</h6>
                                <div className='footer_icons flex lg:gap-[26px] items-center md:gap-[19px] gap-[18px]'>
                                    <i className="fa-brands fa-facebook-f font-custom "></i>
                                    <i className="fa-brands fa-whatsapp font-custom !text-[20px"></i>
                                    <i className="fa-brands fa-instagram  instagram_icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='form_container max-w-[580px]'>
                        <form className='flex flex-col gap-[15px] max-w-[352px]'>
                            <h2 className='font-semibold text-[40px]'>Get in Touch</h2>
                            <h4 className='font-normal text-[22px]'>What do you have to say to us ?</h4>
                            <input type="text" placeholder='Full name' />
                            <input type="email" placeholder='E-mail' />
                            <input type="text" placeholder='Subject' />
                            <textarea name="" placeholder='Message' ></textarea>
                            <div className='!pt-[10px]'>
                                <button className='form_btn flex items-center gap-[18px]'>
                                    Send message
                                    <span className="fa-regular fa-envelope text-[22px]" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection