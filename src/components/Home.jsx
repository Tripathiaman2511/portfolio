import React from 'react'
import { easeIn, motion } from 'framer-motion'
function Home() {
  return (
    <div id="home" className=" mx-[4vw] mt-[15vw] md:mt-[3vw] ">   
        <motion.div className='overflow-hidden md:text-center text-left'>
        < motion.h1 className=" ease-in  font-Outward text-[70vw] md:text-[43vw]   pt-[7vw] lg:text-[42vw] leading-[50vw] md:leading-[30vw] lg:leading-[25vw] lg:pt-[12vh]" initial={{ y: '100%',scale:0}}   animate={{  y: 0,scale:1 }} transition={{ duration: 0.8 }}>AMAN TRIPATHI</motion.h1>
        </motion.div>
        
        < motion.h1 className=" ease-in font-Inter text-[7vw] md:text-[4vw] -mt-[2vh] md:mt-0 lg:text-[3vw] pl-[1vw] " initial={{  x: '-100%',scale:0 }}   animate={{ x: 0,scale:1 }} transition={{ duration: 1.5 }}>SOFTWARE DEVELOPER</motion.h1>
        
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}  className="font-Inter pl-[1vw]  text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[1.5vw]  sm:leading-[3.5vw] md:leading-[3vw] lg:leading-[2.5vw] xl:leading-[2vw] sm:w-[70vw] lg:w-[50vw] leading-[5vw]  pt-[10vw] md:pt-0">I am a Software Developer with a passion for building innovative applications that push the boundaries of what's possible.</motion.p>    
        {/* <div className=' overflow-hidden '>

        <motion.button initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.2}}  className=" duration-300 easy-in  lg:text-[1.7vw] md:text-[3vw] text-[4vw] mt-[5vh] font-normal font-Inter border-2 border-solid border-black lg:px-[7vw] md:px-[10vw] px-[15vw] lg:py-[1.2vh] py-[1vh]  rounded-full hover:bg-violet-500 hover:border-violet-800 hover:text-white hover:scale-110 transition-all ">About Me</motion.button>      
        </div> */}
    </div>
  )
}

export default Home