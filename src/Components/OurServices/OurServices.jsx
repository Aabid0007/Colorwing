import React from 'react'
import cards from './Cards'
import './OurServices.css'
const OurServices = () => {

    return (
        <div className='custom-bg'>
            <div className='container'>
                <div className='services_section !pb-16'>
                    <h3 className='font-bold text-center custom-text
                          md:text-[42px] lg:text-[50px] sm:text-[26px] text-[22px]'>
                        Our Services
                    </h3>
                    <div className='grid services_section_card grid-cols-2 gap-[60px] !pt-14 !pb-18'>
                        {cards.map((card) => (
                            <div key={card.id} className='card_section !p-[34px] text-center flex flex-col gap-[20px] items-center' >
                                <div className='flex justify-center'>
                                    <img src={card.image} alt="" className='w-[522px] h-[306px] ' />
                                </div>
                                <h3 className='!text-black font-semibold text-[24px]'>
                                        {card.heading}
                                    </h3>
                                <div className='card_content max-w-[482px]'>
                                    <p className='!text-black font-normal text-[18px] '>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center text-center '>
                        <button className='more_btn font-normal flex justify-center items-center gap-[3px]'>
                            Know more
                            <span className="material-symbols-outlined">
                                north_east
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices