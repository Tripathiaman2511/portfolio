
function ProjectCard({type,date,projectName,link}) {

  return (<>

    
      
      <a target="_blank"   className=' ease-in-out rounded-xl  bg-slate-100 h-[40vh]  md:text-[1vw] text-[3vw]  font-Inter tracking-tight flex flex-col justify-between hover:bg-black hover:text-white transition-all  duration-300' href={link}>
      <div onMouseMove={(event)=>event.stopPropagation()} className='flex flex-row justify-between mt-[1vw] mx-[1vw] font-semibold '>
        <h1>{type || "Type"}</h1>
        <h1>{date || "Date"}</h1>
      </div>
      
      <h1 onMouseMove={(event)=>event.stopPropagation()} className='mx-[1vw] md:text-[2vw] text-[5vw] leading-[3vh] pb-[2vh] font-Right'>{projectName.toUpperCase() || "Project Name"}</h1>
     
      </a>
     
    
   


  
  </>


    
  )
}

export default ProjectCard