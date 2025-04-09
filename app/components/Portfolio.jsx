import React from 'react'
import { workData } from '@/assets/assets'
import { motion } from "motion/react"




const Portfolio = () => {
  return (
    <motion.div id='portfolio'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1 }}
    className='py-4 mx-2 scroll-mt-20'>
      <motion.h2
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.5 }}
      className='text-center text-5xl font-Ovo'>My Work</motion.h2>

      <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9 }}
      className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
          <motion.div
            whileHover={{scale:1.05}}
            transition={{duration:0.3 }}
          className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden cursor-pointer group border border-gray-400' key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
            <div className='bg-white bg-opacity-25 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex item-center justify-between duration-500 group-hover:bottom-8'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-black mb-5'>{project.description}</p>
              </div>
            </div>    
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Portfolio
 