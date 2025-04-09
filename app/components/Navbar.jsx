import { assets } from "@/assets/assets"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"


const Navbar = ({isDarkMode, setIsDarkMode}) => {




  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  const [isScroll, setIsScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    } )
  },[])

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image className="w-full" src={assets.header_bg_color} alt=""/>
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 
      flex item-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <Link href="/">
            <Image alt="" src={assets.logo} className="w-29 cursor-pointer mr-14"/>
        </Link>

        <ul className={`hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
          <li className="text-blue-400 hover:text-blue-600"><Link href="/Work">My Work</Link></li>
           <li className="text-blue-400 hover:text-blue-600"><Link href="/Resume" target="blank"> Resume</Link></li>
          <li className="text-blue-400 hover:text-blue-600"><a href="#contact">Contact</a></li>
        </ul>
        <div className="flex item-center gap-4">
          <button onClick={()=> setIsDarkMode(prev=> !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu} alt="" className="w-8" />
          </button>
        </div>
        {/* side bar */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500 dark:bg-darkHover">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white :assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li onClick={closeMenu} className="text-blue-400 hover:text-blue-600"><a href="#services">My work</a></li>
          <li onClick={closeMenu} className="text-blue-400 hover:text-blue-600"><a href="#portfolio" target="blank">Resume</a></li>
          <li onClick={closeMenu} className="text-blue-400 hover:text-blue-600"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
