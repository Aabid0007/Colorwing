import React from 'react'
import clientsImg from '../../assets/clients.png'


const OurClients = () => {
    return (
        <div className='custom-bg'>
            <div className='container'>
                <div className='flex justify-center gap-[45px] flex-col !pb-24 items-center'>
                    <h3 className='font-bold text-center custom-text
                          md:text-[42px] lg:text-[50px] sm:text-[26px] text-[22px]'>
                        Our Valued Clients
                    </h3>
                    <img src={clientsImg} alt="" className='w-[96%] h-auto' loading='lazy' />
                </div>
            </div>
        </div>
    )
}

export default OurClients