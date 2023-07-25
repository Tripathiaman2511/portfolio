import React from 'react'
import { motion } from 'framer-motion'
function Home() {
  return (
    <div id="home" className=" mt-[10vh] pl-[3.5vw] mx-[1vw] font-Right font-semibold ">   
        <motion.div className='overflow-hidden' >
        < motion.h1 className=" ease-in text-[7.5vw] leading-[13vh]" initial={{ y: '100%' }}   animate={{  y: 0 }} transition={{ duration: 0.5 }}>AMAN TRIPATHI</motion.h1>
        </motion.div>
        <motion.div className=' ease-in overflow-hidden' >
        < motion.h1 className="  text-[7.5vw] leading-[13vh]" initial={{  y: '100%' }}   animate={{ y: 0 }} transition={{ duration: 1 }}>SOFTWARE DEVELOPER</motion.h1>
        </motion.div>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:1}}  className=" font-semibold font-Inter tracking-normal lg:text-[1.5vw] lg:leading-[4vh] text-[3.5vw] w-[80vw] lg:w-[40vw] pt-[2vh]  lg:pt-[5vh]  ">I am a Software Developer with a passion for building innovative applications that push the boundaries of what's possible.”</motion.p>    
        <div className=' overflow-hidden '>

        <motion.button initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.2}}  className=" duration-300 easy-in  lg:text-[1.5vw] text-[4vw] mt-[7vh] font-normal font-Inter border-2 border-solid border-black lg:px-[3.5vw] px-[10vw] py-[1.5vh] lg:py-[0.3vw] rounded-full hover:bg-violet-500 hover:border-violet-800 hover:text-white hover:scale-110 transition-all ">About Me</motion.button>      
        </div>
    </div>
  )
}

export default Home