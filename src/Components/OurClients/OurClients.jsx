import React from 'react'
import clientsImg from '../../assets/clients.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

const OurClients = () => {
    return (
        <div className='custom-bg'>
            <div className='container'>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: true, amount: 0.2 }}
                    className='flex justify-center gap-[45px] flex-col !pb-24 items-center overflow-hidden'>
                    <h3 className='font-bold text-center custom-text
                          md:text-[42px] lg:text-[50px] sm:text-[26px] text-[22px]'>
                        Our Valued Clients
                    </h3>
                    <img src={clientsImg} alt="" className='w-[96%] h-auto' loading='lazy' />
                </motion.div>
            </div>
        </div>
    )
}

export default OurClients