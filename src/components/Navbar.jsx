
import useScrollPosition from '../hooks/useScrollPosition'

function Navbar() {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }

    const scrollPosition = useScrollPosition()

  return (
   <>
   
    <div className='font-inter flex flex-row py-[1vh] xl:text-[1vw] items-center lg:text-[2vw] text-[3vw] justify-between' >
        <h1 className='font-Right mx-[1vw] py-[0.5vh] px-[4vw] xl:text-[1.5vw] text-[5vw] '>AMAN</h1>
        {/* <div className='hidden md:flex md:flex-row'>
        <a className='mx-[0.5vw] py-[0.5vh] '  href="#home">Work</a>
        <a className='mx-[0.5vw] py-[0.5vh]  ' href="#contact">Project</a>
        </div> */}
        <a href='mailto: iamtripathi.25@gmail.com' className=' mr-[4vw]  underline underline-offset-8'>iamtripathi.25@gmail.com</a>
    </div>


   </>
  )
}

export default Navbar