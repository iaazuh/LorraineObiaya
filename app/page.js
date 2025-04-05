'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(false)


  useEffect(()=>{
    if (localStorage.theme === 'dark' ||(!('theme' in 
      localStorage
    )&& window.matchMedia('(prefers-color-scheme:dark)').matches) ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme ='dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme =''
    }
  },[isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Hero isDarkMode={isDarkMode}  />
      <About isDarkMode={isDarkMode}  />
      <Services isDarkMode={isDarkMode}  />
      <Portfolio isDarkMode={isDarkMode}  />
      <Contact isDarkMode={isDarkMode}  />
      <Footer isDarkMode={isDarkMode}  />
    </>
  );
}
