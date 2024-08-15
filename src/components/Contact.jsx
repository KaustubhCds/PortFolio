import React from 'react'
import img1 from "../images/insta.png"
import img2 from "../images/linkedin.png"
import img3 from "../images/gmail.png"

const Contact = () => {
  return (
    <div className='mt-28'>
        <div className=' text-white text-5xl flex justify-center' >
            Contact
        </div>
        <div className='mt-16 px-96  flex justify-between'>
            <a href="https://www.instagram.com/im_kaustubh_?utm_source=qr"><img src={img1} className="h-14 hover:scale-125" alt="" /></a>
            
            <a href='https://www.linkedin.com/in/kaustubh-phatangare-a7a301230/'><img src={img2} className="h-14 hover:scale-125" alt="" /></a>
            <a href=''><img src={img3} className="h-14 hover:scale-125" alt="" /></a>
        </div>



       
      
    </div>
  )
}

export default Contact
