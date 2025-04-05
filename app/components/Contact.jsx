import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from "motion/react"



const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f12ibxq', 'template_rkbs2k1', form.current, {
        publicKey: 'ttyPBYGuV6uPnnaEX',
      })
      .then(
        () => {
          setName('')
          setEmail('')
          setDescription('')
          toast.success('Message Sent Successfully!')
        },
        (error) => {
          toast.error('Message Failed to Send!')
        },
      );
  };

 
  return (
    <motion.div id='contact'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 1 }}
    className='w-full px-[12%] py-5 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        <motion.h4
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration: 0.5,delay:0.3 }}
        className='text-center mb-2 text-lg font-Ovo'>Connect with me</motion.h4>
        <motion.h2
          initial={{opacity:0,y:-20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration: 0.5,delay:0.5 }}
        className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
        <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration: 0.5,delay:0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Please reach out to me if you have any questions or feedback by filling the form below.
        </motion.p>
        <motion.form
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration: 0.5,delay:0.9 }}
        ref={form} onSubmit={sendEmail}>
        <motion.div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <motion.input
                  initial={{opacity:0,x:-50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration: 0.6,delay:1.1 }}
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white 
                dark:bg-darkHover/30 dark:border-white/90' 
                type="text" 
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Please enter name'
                required />

                <motion.input
                  initial={{opacity:0,x:50}}
                  whileInView={{opacity:1,x:0}}
                  transition={{duration: 0.6,delay:1.1 }}
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white
                dark:bg-darkHover/30 dark:border-white/90' 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder='Please enter email' 
                required/>
            </motion.div>
          <motion.textarea
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration: 0.6,delay:1.3 }}
          className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6
          dark:bg-darkHover/30 dark:border-white/90' 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            rows='5' 
            placeholder='Enter message' 
            required></motion.textarea>
          <motion.button
            whileHover={{scale:1.05}}
            transition={{duration: 0.3}}
          className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 font-Ovo dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'
            type='submit' value='Send'>
            Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

            <ToastContainer />

        </motion.form>
    </motion.div>
  )
}

export default Contact
