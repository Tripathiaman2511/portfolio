import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'
import leftArrow from '../images/leftArrow.svg'
import rightArrow from '../images/rightArrow.svg'
import figma from '../images/icons8-figma.svg'
import adobeXd from '../images/icons8-adobe-xd-96.svg'
import reactJs from '../images/ReactIcon.svg'
import astroJs from '../images/AstroIcon.svg'
import mongodb from '../images/MongoIcon.svg'
import nodeJs from '../images/NodeIcon.svg'
import React,{useState} from 'react'
import ThreeD from './ThreeD'

function ProjectComponent() { 
  const { scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [0,100],[1,0]);
  const[selection,setSelection]=useState(true)
    const changeCarousel=()=>{
        setSelection(!selection)
    
      }

      
  return (
    <>
      <div  className='mt-[6vh]'>
        <div className='flex flex-row'>    
          <div className='flex flex-row'>
            <motion.div initial={{opacity:0}} transition={{delay:0.1}} style={{scale,x:useMotionValue(-30)}}  animate={selection?{x:0,display:'flex',opacity:1}:{x:-30,display:'none'}}  className='w-[30vw] bg-white  drop-shadow-2xl px-[2vw] py-[2vh] flex flex-col justify-between h-[60vh] rounded-lg delay-10 '>
        <div>
            <h1 className='text-[2.8vw] text-slate-900 pb-[7vh]'>DESIGN</h1>
            <p className='text-justify text-[1vw] text-slate-500'>I am passionate about UI/UX Designing because it allows me to create meaningful and intuitive experiences that enhance people's interactions with technology.</p>  
            <ul className='mt-[5vh] flex flex-row justify-start '>
                <li><img className='transition-all duration-300 ease-in-out w-[3vw] bg-black rounded-lg z-10 absolute  drop-shadow-xl hover:scale-150  ' src={adobeXd} alt="adobexd" /></li>
                <li><img className='transition-all duration-300 ease-in-out w-[3vw] bg-black hover:translate-x-5 rounded-lg z-0 absolute ml-[1.6vw] drop-shadow-xl hover:scale-150 hover:z-10 ' src={figma} alt="figma" /></li>
            </ul>
        </div>
      <button className=' w-[17vw] mx-auto mb-[4vh] py-[1vh] bg-[#3864FF] text-white rounded-lg hover:bg-[#EB3737] transition-all duration-300 delay-100 hover:scale-110'>View Design</button>
            </motion.div>
            <motion.div initial={{opacity:0.5}} transition={{delay:0.1}} style={{scale,x:useMotionValue(-30)}} animate={selection?{x:-30,display:'none'}:{x:0,display:'flex',opacity:1}} className={`w-[30vw] bg-white  drop-shadow-2xl px-[2vw] py-[2vh] flex flex-col justify-between h-[60vh] rounded-lg ${selection?'hidden':'block'} `}>
        <div>
            <h1 className='text-[2.8vw] text-slate-700 pb-[7vh]'>DEVELOPMENT</h1>
            <p className='text-justify text-[1vw] text-gray-500'>I choose to become a Software Developer because I am passionate about using technology to solve problems and create innovative solutions.</p> 
            <ul className='mt-[5vh] flex flex-row justify-start '>
                <li><img className='transition-all duration-300 ease-in-out w-[4vw]  rounded-lg z-40 absolute  drop-shadow-xl hover:scale-150  ' src={reactJs} alt="adobexd" /></li>
                <li><img className='transition-all duration-300 ease-in-out w-[4vw]  rounded-lg z-20 absolute ml-[2vw] drop-shadow-xl hover:scale-150 hover:z-40  ' src={astroJs} alt="figma" /></li>
                <li><img className='transition-all duration-300 ease-in-out w-[4vw] rounded-lg z-10 absolute ml-[4vw] drop-shadow-xl hover:scale-150 hover:z-40  ' src={mongodb} alt="figma" /></li>
                <li><img className='transition-all duration-300 ease-in-out w-[4vw]  rounded-lg z-0 absolute ml-[6vw]    drop-shadow-xl hover:scale-150 hover:z-40 ' src={nodeJs} alt="figma" /></li>
            </ul>
        </div>
      <button className=' w-[17vw] mx-auto mb-[4vh] py-[1vh] bg-[#3864FF] text-white rounded-lg hover:bg-[#EB3737] transition-all duration-300 delay-100 hover:scale-110'>View Projects</button>
            </motion.div>
          </div>
      
{/* Images */}
          <motion.div initial={{opacity:0}} transition={{delay:0.5}} style={{x:useMotionValue(30)}}   animate={selection?{x:0,display:'flex',opacity:1}:{x:30,display:'none'}} className='w-[60vw] bg-white ml-[2vw]  drop-shadow-2xl px-[2vw] py-[2vh] flex flex-col justify-between h-[60vh] rounded-lg transition-all ease-out duration-500'>
            <ThreeD />
          </motion.div>  
          <motion.div initial={{opacity:0}} transition={{delay:0.5}} style={{x:useMotionValue(30)}} animate={selection?{x:20,display:'none'}:{x:0,display:'flex',opacity:1}} className={`w-[60vw] bg-white ml-[2vw]  drop-shadow-2xl px-[2vw] py-[2vh] flex flex-col justify-between h-[60vh] rounded-lg ${selection?'hidden':'block'} transition-all ease-out duration-500 `}>
            <ThreeD />
          </motion.div>
        </div> 
      <div className='flex flex-row justify-end -mt-[10vh]'>
        <button  onClick={changeCarousel} className={`right-[9vw] z-10 w-[5vw] ${selection?'hidden':'block'} animate-pulse `}  ><img src={leftArrow} alt="" /></button>
        <button onClick={changeCarousel} className={` z-10 w-[5vw]  ${selection?'block':'hidden'} animate-pulse `}><img src={rightArrow} alt="" /></button>

        </div> 

      </div>
    </>
  )
}

export default ProjectComponent