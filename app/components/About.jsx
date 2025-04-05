import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1 }}
    className='w-full px-[12%] py-5 scroll-mt-20'>
      <motion.h2
       initial={{opacity:0, y:-20}}
       whileInView={{opacity:1, y:0}}
       transition={{duration: 0.5, delay:0.5 }}
      className='text-center text-5xl font-Ovo'>About Me</motion.h2>
        <motion.div 
         initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration: 0.8 }}
        className='flex w-full flex-col lg:flex-row items-center gap-10 my-5'>
            <motion.h3
              initial={{y:-20, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration: 0.6, delay:0.3}}
              className='flex item-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Lorraine Obiaya</motion.h3>
            <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration: 0.6, delay:0.8 }}
            className='flex-1'>
                <motion.h1 
            initial={{y:-30, opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration: 0.8, delay:0.5}}
            className='text-xl sm:text-2xl lg:text-[25px] pb-2 font-Ovo'>
                UI/UX Design, Product Design, Graphics Design.
        </motion.h1>
                <p className='mb-10 max-w-2xl font-Ovo'>
                I’m Obiaya N. Lorraine, a passionate and innovative UI/UX Designer based in Sheffield, United Kingdom. With hands-on experience in creating user-centered design solutions, I specialize in enhancing user satisfaction while driving business objectives.
                I thrive on understanding user needs through in-depth research, crafting intuitive wireframes, and developing interactive prototypes that transform ideas into impactful digital experiences. My skill set spans user research, information architecture, usability testing, and interaction design, and I’m proficient in tools like Figma, Adobe Creative Suite, Canva, and Sketch.
                </p>
                
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
