import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Hero = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-colgap-4 pt-20'>
      

      <div className='flex flex-col sm:flex-row items-center gap-4 mb-0 pb-0'>
        <motion.a href="#contact" 
        initial={{y:30, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration: 0.6, delay:1}}
        className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
            Contact me <Image className='w-4' src={assets.right_arrow_white} alt='my contact' /></motion.a>
        
      </div>
    </div>
  )
}

export default Hero
