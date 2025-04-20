import React, { useState } from 'react'
import './Banner.css'
import img1 from '../../assets/Rectangle 1.png';
import img2 from '../../assets/Rectangle 2.png';
import img3 from '../../assets/Rectangle 3.png';
import img4 from '../../assets/Rectangle 4.png';
import img5 from '../../assets/Rectangle 5.png';
import img6 from '../../assets/Rectangle 6.png';
import img7 from '../../assets/Rectangle 7.png';
import img8 from '../../assets/Rectangle 8.png';
import img9 from '../../assets/Rectangle 9.png';
import arrow from '../../assets/Arrow.png'

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

    return (
        <div className='banner relative main_banner_img'>
            <div className='container'>
                <div className='banner_section relative !py-[75px] place-items-center z-100' onClick={() => setActiveIndex(null)} >
                    <h1 className='font-bold text-[46px] leading-[65px] text-center max-w-[666px] custom-text'>
                        Transform Your Space Make a
                        <span style={{ background: 'rgba(255, 200, 23, 1)' }} className='!pl-1.5'>
                            Lasting Impression
                        </span> !
                    </h1>
                    <span className='bg_blur_img'></span>
                    <div className='banner_img_section' >
                        <span className='custom-text left_side_span absolute'>
                            Our services
                        </span>
                        <img src={arrow} alt="" className='left_side_arrow absolute' />
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className={`item_img w-[190px] h-[210px] absolute img-${index}
                                ${activeIndex === null ? '' : activeIndex === index
                                        ? 'active'
                                        : 'inactive'
                                    }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveIndex(activeIndex === index ? null : index);
                                }}
                            />
                        ))}
                    </div>
                    <p className='custom-text font-normal text-[17px] max-w-[583px] text-center'>Discover innovative indoor and outdoor branding solutions designed to captivate, inspire, and connect with your audience effortlessly.</p>
                    <button className='more_btn font-normal flex justify-center items-center gap-[3px]'>Contact us
                        <span className="material-symbols-outlined">
                            north_east
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
