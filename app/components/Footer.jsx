import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <div className='flex w-max items-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark  :assets.mail_icon} alt='' className='w-6'/>
            obiayalorraine30@gmail.com
            
        </div>
        <p>+447776623586 </p>
      </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>Copyright &copy; Lorraine Obiaya 2025. All Rights Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href="https://github.com/iaazuh" target='blank'>Github</a></li>
                <li><a href="https://www.linkedin.com/in/ifeanyi-azuh-501132b2/" target='blank'>LinkedIn</a></li>
                <li><a href="hhttps://www.instagram.com/tech_boi_osh/" target='blank'>Instagram</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer
