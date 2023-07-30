import React, { Fragment, useState, useRef } from 'react'
import { WorkData } from '../data/WorkData'
import {motion} from 'framer-motion'
import downKey from '../images/SearchDown.svg'


function WorkCard() {
  const scrollRef=useRef(null)
  return (
<>
<div className=" mx-[1vw] font-Inter mt-[25vh] xl:text-[1.2vw] lg:text-[2vw] md:text-[2.5vw] text-[4vw]">
  <div className='overflow-hidden '>
  <motion.div initial={{ y: '100%' }}   animate={{  y: 0 }} transition={{ duration: 0.6,delay:2.2 }} className=" flex flex-row justify-between px-[5vw]">
            <div className="flex flex-row ">
                <h1 >Selected Work </h1>
                <img className="lg:w-[1vw] w-[3vw] ml-[1vw]" src={downKey} alt=""/>
            </div>
            <h1 >(Discover)</h1>
        </motion.div>
        </div>
        <div className='overflow-hidden mt-[1vh] mb-[2vh]'>
        <motion.span  initial={{opacity :0 }}   animate={{  opacity:1 }} transition={{ duration: 0.6,delay:2.2 }} className="block h-[0.2vh] mx-[4vw]  bg-slate-600 rounded-full"></motion.span>

        </div>
  
   <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{ duration: 0.6,delay:2.2 }} >
   {
      WorkData.map((value,key)=>{
      
        return(
          <Fragment key={key}>
          
          <motion.div  className='font-Inter font-semibold xl:text-[1.5vw] lg:text-[2vw] md:text-[2.7vw] text-[5vw]  flex flex-row justify-between lg:px-[4vw] px-[5vw]   lg:w-[80vw] '>
            <h1 className='leading-[3vh]'>{value.company}</h1>
            <h2 className='leading-[3vh]'>{value.position}</h2>
            <h2 className='hidden lg:block'>{value.date}</h2>
          </motion.div>
          <div className='font-Inter xl:text-[1vw] lg:text-[1.5vw] md:text-[2vw] text-[3vw] flex flex-row  mx-[4vw] justify-between mt-[5vh] lg:mb-[15vh] mb-[10vh]   px-[3vw] md:w-[80vw] '>
            <h1>{`(00${key+1})`}</h1>
            <p className=' font-bold text-[3.5vw] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[1.2vw] xl:leading-[4vh] md:w-[50vw] w-[60vw] lg:w-[45vw] lg:leading-[2.8vw] tracking-tight '>{value.smallDesc}</p>
          </div>

         
          
          </Fragment>
        )
      })
    }
    
    </motion.div>   

   

        
    </div>


    
  


 
 
</>
    
  )

}

export default WorkCard
