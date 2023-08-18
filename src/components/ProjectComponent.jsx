import { useScroll, useTransform,} from 'framer-motion'

import React,{Fragment, useState} from 'react'

import ProjectCard from './ProjectCard'
import { ProjectData } from '../data/ProjectData'

function ProjectComponent() { 
  const { scrollYProgress} = useScroll()
  const scale = useTransform(scrollYProgress, [0,100],[1,0]);


      
  return (
    <>
    
    <div className=' grid   md:grid-cols-2 grid-cols-1 grid-flow-row mx-[10vw] gap-5 '>
    {ProjectData.map((value,key)=>{
      return(<Fragment key={key}><ProjectCard type={value.type} projectName={value.projectName} date={value.date} link={value.githubLink}/></Fragment>)
    })}
    </div>
    
   
     
    </>
  )
}

export default ProjectComponent