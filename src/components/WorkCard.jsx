import React, { Fragment, useState } from 'react'
import { motion,useMotionValue, useScroll, useTransform } from 'framer-motion'
import { WorkData } from '../data/WorkData'
import '../css/global.css'
import ThreeD from './ThreeD'
function WorkCard() {
    const [flag,setFlag]=useState(false)
    const[selected,setSelect]=useState(-1)
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      }
        
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      } 
      const item2 = {
        hidden: { x: -20, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1
        }
      } 
console.log(selected)
  return (
<>
<div className='flex flex-row justify-between mx-[2vw] mt-[4vh] '>
<motion.div variants={item2} initial="hidden" animate="visible" className='bg-slate-50 w-[70vw] mx-[2vw] h-[75vh] flex flex-row'>
                    {
                        selected<0?(<motion.div variants={item2}><ThreeD/></motion.div>):(
                        WorkData.map((value,key)=>{
                            return(
                                <Fragment key={key}>
                              
                                        <motion.div variants={container}    className={`bg-white rounded-2xl w-[57vw] p-[2vw]  drop-shadow-2xl mx-[2vw] my-[5vh] flex flex-col   justify-between transition-all ease-in-out duration-500 ${selected===key?'block':'hidden'}`}>
                                            <div   className=' mb-[2vh] leading-[3vw] transition-all delay-100 duration-150'>
                                                    <h1 className='text-[3vw] font-bold' >{value.position}</h1>
                                                    <h2  className='text-[1vw] italic' >{value.company}</h2>
                                                  
                                                <ul  className='w-[50vw] ml-[2vw] mt-[4vh] text-left text-[1.5vw] leading-9 text-slate-600 list-disc' >
                                                {value.smallDesc.map((value,key2)=>{
                                                    return(<li key={key2} >{value}</li>)
                                                })}
                
                                                </ul>
                                          
                                            </div>
                                            <button  className='bg-indigo-500 px-[2vw] w-[20vw] rounded-lg drop-shadow-2xl py-[1vh]  text-[1.5vw] text-slate-100' >Certificate</button>
                                        </motion.div>
                                    
                                
                                </Fragment>
                            )
                           
                           

                        }))
                            
                        
                    }
                    
                </motion.div>


                <motion.div initial="hidden" animate="visible" variants={container} className='hide-scrollbar bg-slate-50 w-[30vw] rounded-md ml-[0.5vw] h-[75vh] overflow-x-hidden'>
        {
            WorkData.map((value,key)=>{
                return(
                    <Fragment key={key}>
                    <motion.div  variants={item} key={key} onClick={()=>{setSelect(key);setFlag(!flag)}} className={`   font-Pop  bg-white my-[1vh] mx-[1vw]  pt-[3vw] rounded-xl drop-shadow-xl hover:bg-slate-900 hover:font-bold hover:text-white transion-[transform] duration-300 cursor-pointer ${selected===key?' border-4 border-solid border-slate-900':'bg-white'}`}>
                    <h1  className='text-[3vw] leading-none pb-[1vh] pl-[0.4vw] '>{value.position.toUpperCase()}</h1>
                    
                    </motion.div>
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
