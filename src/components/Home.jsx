import React from 'react'
import { motion } from 'framer-motion'
function Home() {
  return (
    <div id="home" className=" mx-[4vw] mt-[10vh]  ">   
        <motion.div className='overflow-hidden' >
        < motion.h1 className=" ease-in font-Right font-bold text-[8vw] leading-[8vw] sm:leading-[7vw] tracking-tight  " initial={{ y: '100%' }}   animate={{  y: 0 }} transition={{ duration: 0.5 }}>AMAN TRIPATHI</motion.h1>
        </motion.div>
        <motion.div className='  overflow-hidden' >
        < motion.h1 className=" ease-in font-Right font-bold text-[8vw] leading-[8vw] sm:leading-[7vw] tracking-tight " initial={{  y: '100%' }}   animate={{ y: 0 }} transition={{ duration: 1 }}>SOFTWARE DEVELOPER</motion.h1>
        </motion.div>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}  className="font-Inter font-semibold mt-[3vw]  md:mt-[4vw]  text-[4vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]  sm:leading-[3.5vw] md:leading-[3vw] lg:leading-[2.5vw] xl:leading-[2vw]  sm:w-[70vw] leading-[4vw]">I am a Software Developer with a passion for building innovative applications that push the boundaries of what's possible.</motion.p>    
        {/* <div className=' overflow-hidden '>

        <motion.button initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.2}}  className=" duration-300 easy-in  lg:text-[1.7vw] md:text-[3vw] text-[4vw] mt-[5vh] font-normal font-Inter border-2 border-solid border-black lg:px-[7vw] md:px-[10vw] px-[15vw] lg:py-[1.2vh] py-[1vh]  rounded-full hover:bg-violet-500 hover:border-violet-800 hover:text-white hover:scale-110 transition-all ">About Me</motion.button>      
        </div> */}
    </div>
  )
}

export default Home