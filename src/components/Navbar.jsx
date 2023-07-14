import React from 'react'
import useScrollPosition from '../hooks/useScrollPosition'

function Navbar() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    const scrollPosition = useScrollPosition()

  return (
   <>
   <nav className={`text-[1.5rem]  top-0 sticky z-10 transition-all duration-300 ease-in-out  ${scrollPosition>0?'text-white  bg-slate-900 ':''}`}> 
    
    <ul className=" flex flex-row py-[1vh] justify-end mr-[2vw]">
        <li className="my-[0.5vh]" ><a className="mx-[1vw]  px-[1.5vw] py-[1vh] hover:text-indigo-300 transition-all ease-in-out duration-400 hover:animate-pulse " href="#home">Home</a></li>
        <li className="my-[0.5vh]" ><a className="mx-[1vw]   px-[1.5vw] py-[1vh] hover:text-indigo-300 transition-all ease-in-out duration-400 hover:animate-pulse " href="#work-history">Work</a></li>
        <li className="my-[0.5vh]" ><a className="mx-[1vw]  px-[1.5vw] py-[1vh] hover:text-indigo-300 transition-all ease-in-out duration-400 hover:animate-pulse " href="#project">Project</a></li>
        <li className="my-[0.5vh]" ><a className="mx-[1vw]  px-[1.5vw] py-[1vh] hover:text-indigo-300 transition-all ease-in-out duration-400 hover:animate-pulse " href="#contact">Contact</a></li>
    </ul>
</nav>
   </>
  )
}

export default Navbar