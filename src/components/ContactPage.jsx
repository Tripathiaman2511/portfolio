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
        <h1 className='text-[2.6vw]  tracking-tighter text-center leading-[6vh] mb-[20vh]'>Eager to Embrace New Opportunities!<br/> Let's Collaborate for Success!</h1>
        <div className=' flex flex-row justify-between items-center xl:text-[1.4vw]'>
            <div>
            <a target='_blank' href="https://www.linkedin.com/in/aman-tripathi-6ba35a191/" className='mx-[1vw] py-[0.5vh]   font-semibold'>LinkedIn</a>
            <a target='_blank' href="https://github.com/Tripathiaman2511" className='mx-[1vw] py-[0.5vh]   font-semibold '>Github</a>
            </div>
            <div className=''>
            <a href="#" className='flex flex-row mx-[1vw] py-[0.5vh] hover:text-slate-500 '>
                <h1 className='xl:text-[1vw]'> Back to top</h1> 
            <img className='w-[0.8vw] ml-[0.5vw] rotate-180' src={searchUp} alt="up" />
                
                </a>
            </div>
        </div>
    </div>

  </>
  )
}

export default ContactPage