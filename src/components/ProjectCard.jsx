
function ProjectCard({type,date,projectName,link}) {

  return (<>

    
      
      <a target="_blank"   className=' ease-in-out rounded-xl  bg-slate-100 h-[30vh]  font-Inter tracking-tight flex flex-col justify-between hover:bg-black hover:text-white transition-all  duration-300' href={link}>
      <div onMouseMove={(event)=>event.stopPropagation()} className='flex flex-row xl:text-[1.2vw] lg:text-[1.5vw] md:text-[2vw] text-[4vw] justify-between pt-[2vw] px-[2vw] font-semibold '>
        <h1>{type || "Type"}</h1>
        <h1>{date || "Date"}</h1>
      </div>
      
      <h1 onMouseMove={(event)=>event.stopPropagation()} className='px-[2vw] xl:text-[2vw] lg:text-[2.5vw] md:text-[3vw] text-[7vw] leading-[3vh] pb-[2vh] font-Right'>{projectName.toUpperCase() || "Project Name"}</h1>
     
      </a>
     
    
   


  
  </>


    
  )
}

export default ProjectCard