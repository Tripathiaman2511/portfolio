import { Fragment } from 'react'
import { WorkData } from '../data/WorkData'
import {motion} from 'framer-motion'
import downKey from '../images/SearchDown.svg'


function WorkCard() {
  
  return (
<>
<div className=" mx-[1vw] mt-[20vh]">
  <div className='overflow-hidden font-Inter text-[3vw] sm:text-[2.4vw] md:text-[2vw] lg:text-[1.4vw]  mx-[4vw]'>
    <motion.div initial={{ y: '100%' }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className=" flex flex-row justify-between">
            <div className="basis-1/2 flex flex-row ">
                <h1 >Selected Work </h1>
                <img className="w-[3vw] sm:w-[1.5vw] lg:w-[1vw]  ml-[1vw]  lg:ml-[0.5vw]" src={downKey} alt=""/>
            </div>
            <h1 className=''>( Discover )</h1>
    </motion.div>
  </div>
  <div className='overflow-hidden mt-[1vh] mb-[2vh]'>
    <motion.span  initial={{opacity :0 }}   whileInView={{  opacity:1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="block h-[0.1vh] mx-[4vw]  bg-slate-600 rounded-full"></motion.span>
  </div>
  
   {
      WorkData.map((value,key)=>{
      
        return(
          
          <Fragment key={key}>
          <motion.div whileInView={{opacity:1,y:0}} viewport={{ once: true }} initial={{opacity:0,y:100}}  transition={{ duration: 0.6,delay:0.2 }} >
          <div  className=' mx-[4vw] items-center flex flex-row font-Inter text-[3.6vw] sm:text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] xl:text-[1.2vw]  tracking-tighter font-normal '>
            <h1 className=' basis-2/4 '>{value.company}</h1>
            <h2 className='basis-2/4 text-right md:text-left '>{value.position}</h2>
            <h2 className='basis-1/4 hidden md:block  '>{value.date}</h2>
          </div>
          <div className='  font-Inter flex flex-col  md:flex-row  mx-[4vw]  mt-[10vh] mb-[15vh]  md:px-[3vw]  '>
            <h1 className='basis-1/4 text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]   '>{`(00${key+1})`}</h1>
            <p className='basis-3/4 lg:basis-2/3 text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw]  lg:leading-[3vw] leading-[7vw] sm:leading-[4vw]   py-[2vw] md:py-0  tracking-normal font-bold  '>{value.smallDesc}</p>
          </div>
            </motion.div>


         
          
          </Fragment>
        )
      })
    }
    
    

   

        
    </div>


    
  


 
 
</>
    
  )

}

export default WorkCard
