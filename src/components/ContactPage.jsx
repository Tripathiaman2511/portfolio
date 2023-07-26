import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useScroll,useTransform } from 'framer-motion'
import searchUp from '../images/SearchDown.svg'

function ContactPage() {
    const[show,setShow]=useState(false)
    const { scrollYProgress } = useScroll()
const scale = useTransform(scrollYProgress, [0, 1],[0,1]);
    const [yourName,setYourName]=useState('')
    const [emailId,setEmailId]=useState('')
    const [message,setMessage]=useState('')

    const submit=(e)=>{
        e.preventDefault();

        const templateParams={
            from_name:yourName,
            from_email:emailId,
            from_message:message
        }

        emailjs.send('<YOUR_SERVICEID>','<TEMPLATE_ID>',templateParams,'<YOUR_PUBLIC_KEY>')
        .then(function(res){
            console.log('Success!',res.status,res.text)
        },function(err){
            console.log("Failed...",err)
        }
        )
    }
  return (<>
  
    <div className=' mx-[2vw] mt-[25vh] mb-[5vh] font-Inter'>
        <h1 className='lg:text-[2.6vw]   text-[5vw] font-semibold  tracking-tighter text-center lg:leading-[4vh] leading-[3.5vh] mb-[20vh]'>Eager to Embrace New Opportunities!<br/> Let's Collaborate for Success!</h1>
        <div className=' flex flex-row justify-between items-center text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[1.4vw]'>
            <div>
            <a target='_blank' href="https://www.linkedin.com/in/aman-tripathi-6ba35a191/" className='mx-[1vw] py-[0.5vh]   font-semibold'>LinkedIn</a>
            <a target='_blank' href="https://github.com/Tripathiaman2511" className='mx-[1vw] py-[0.5vh]   font-semibold '>Github</a>
            </div>
            <div className=''>
            <a href="#" className='flex flex-row mx-[1vw] py-[0.5vh] hover:text-slate-500 '>
                <h1 className='xl:text-[1.2vw] lg:text-[2vw] md:text-[2.5vw] text-[4vw]'> Back to top</h1> 
            <img className='lg:w-[1.2vw] md:w-[1.7vw] w-[3vw] ml-[0.5vw] rotate-180' src={searchUp} alt="up" />
                
                </a>
            </div>
        </div>
    </div>

  </>
  )
}

export default ContactPage