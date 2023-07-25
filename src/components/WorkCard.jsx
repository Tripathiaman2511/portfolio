import React, { Fragment, useState, useRef } from 'react'
import { WorkData } from '../data/WorkData'
import {motion} from 'framer-motion'
import downKey from '../images/SearchDown.svg'


function WorkCard() {
  const scrollRef=useRef(null)
  return (
<>
<div class=" mx-[1vw] font-Inter mt-[15vh] xl:text-[1.2vw] text-[4vw]">
  <div className='overflow-hidden '>
  <motion.div initial={{ y: '100%' }}   animate={{  y: 0 }} transition={{ duration: 0.6,delay:2.2 }} class=" flex flex-row justify-between px-[5vw]">
            <div class="flex flex-row ">
                <h1 >Selected Work </h1>
                <img class="lg:w-[1vw] w-[3vw] ml-[1vw]" src={downKey} alt=""/>
            </div>
            <h1 >(Discover)</h1>
        </motion.div>
        </div>
        <div className='overflow-hidden mt-[2vh]'>
        <motion.span  initial={{opacity :0 }}   animate={{  opacity:1 }} transition={{ duration: 0.6,delay:2.2 }} class="block h-[0.2vh] mx-[4vw] lg:mb-[10vh] mb-[5vh]  bg-slate-600 rounded-full"></motion.span>

        </div>
  
      
        {
      WorkData.map((value,key)=>{
      
        return(
          <Fragment key={key}>
          
          <motion.div  className='font-Inter font-semibold lg:text-[1vw] text-[4vw]  flex flex-row justify-between lg:px-[4vw] px-[5vw] mt-[1vh]  lg:w-[80vw] '>
            <h1>{value.company}</h1>
            <h2 >{value.position}</h2>
            <h2 className='hidden lg:block'>{value.date}</h2>
          </motion.div>
          <div className='font-Inter lg:text-[1vw] text-[3vw] flex flex-row  mx-[4vw] justify-between mt-[5vh] lg:mb-[20vh] mb-[10vh]   px-[3vw] w-[80vw] '>
            <h1>{`(00${key+1})`}</h1>
            <p className=' font-bold text-[1.7vw] w-[45vw] leading-[2.8vw] tracking-tight '>{value.smallDesc}</p>
          </div>

         
          
          </Fragment>
        )
      })
    }
   

        
    </div>


    
  


 
 
</>
    
  )

}

export default WorkCard
