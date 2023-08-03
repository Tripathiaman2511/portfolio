


function Navbar() {
    

  return (
   <>
   
    <div className='font-inter flex flex-row py-[1vh] items-center justify-between mx-[1vw]  ' >
        <h1 className='font-Right  px-[4vw] text-[6vw] sm:text-[5vw] tracking-tight md:text-[4vw] lg:text-[3.5vw] xl:text-[3vw]'>AMAN<sup>&#169;</sup></h1>
        {/* <div className='hidden md:flex md:flex-row'>
        <a className='mx-[0.5vw] py-[0.5vh] '  href="#home">Work</a>
        <a className='mx-[0.5vw] py-[0.5vh]  ' href="#contact">Project</a>
        </div> */}
        <a href='mailto: iamtripathi.25@gmail.com' className='   hover:underline hover:underline-offset-8 text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] xl:text-[2vw]  px-[4vw] '>iamtripathi.25@gmail.com</a>
    </div>


   </>
  )
}

export default Navbar