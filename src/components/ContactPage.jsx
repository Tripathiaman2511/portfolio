import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import { useScroll,useTransform } from 'framer-motion'
function ContactPage() {
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
  return (<motion.div initial={{opacity:0}} transition={{duration:1}} style={{ scale }} animate={{opacity:1}}  className=' mt-[10vh] mx-[4vw]'>
    <motion.div       style={{
        scaleY: scrollYProgress
      }}   className=' font-Pop flex flex-col w-[40vw]   px-[4vw] pb-[3vh] pt-[4vh] mx-auto bg-white drop-shadow-2xl rounded-2xl '>
        <h1 className='text-[2.4vw] pb-[3vh]'>Get in <span className='text-[#3864FF]'>Touch.</span></h1>
        <input type="text" onChange={(e)=>setYourName(e.target.value)} value={yourName} className=' mx-auto w-[30vw] rounded-xl px-[1vw] py-[1.5vh] mb-[2vh] drop-shadow-2xl placeholder:italic placeholder:text-[1vw] focus:outline-none focus:ring focus:ring-violet-500 focus:bg-violet-100 focus:text-slate-700  ' placeholder='Your Name' />
        <input type="email" onChange={(e)=>setEmailId(e.target.value)} value={emailId} className=' mx-auto w-[30vw] rounded-xl px-[1vw] py-[1.5vh] mb-[2vh] drop-shadow-2xl placeholder:italic placeholder:text-[1vw] focus:outline-none focus:ring focus:ring-violet-500 focus:bg-violet-100 focus:text-slate-700  ' placeholder='Email Id' />
        <textarea onChange={(e)=>setMessage(e.target.value)} value={message}  className=' resize-none mx-auto w-[30vw] h-[15vh] rounded-xl px-[1vw] py-[1.5vh] drop-shadow-2xl placeholder:italic placeholder:text-[1vw] focus:outline-none focus:ring focus:ring-violet-500 focus:bg-violet-100 focus:text-slate-700  '  placeholder='Description'/>
        <button onClick={submit} className='hover:bg-violet-500 bg-[#EB3737] text-white w-[20vw] mx-auto rounded-2xl drop-shadow-lg py-[1vh] mt-[4vh]'>Submit</button>

    </motion.div>


  </motion.div>
    
  )
}

export default ContactPage