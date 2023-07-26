


function Navbar() {
    

  return (
   <>
   
    <div className='font-inter flex flex-row py-[1vh] items-center justify-between' >
        <h1 className='font-Right mx-[1vw] py-[0.5vh] px-[4vw] xl:text-[2.5vw] lg:text-[3vw] md:text-[4vw] text-[5vw] '>AMAN</h1>
        {/* <div className='hidden md:flex md:flex-row'>
        <a className='mx-[0.5vw] py-[0.5vh] '  href="#home">Work</a>
        <a className='mx-[0.5vw] py-[0.5vh]  ' href="#contact">Project</a>
        </div> */}
        <a href='mailto: iamtripathi.25@gmail.com' className=' mr-[4vw]  underline underline-offset-8 text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw]'>iamtripathi.25@gmail.com</a>
    </div>


   </>
  )
}

export default Navbar