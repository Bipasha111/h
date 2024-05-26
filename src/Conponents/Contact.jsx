
import React from 'react'

const Contact = () => {
  return (
<>
<section className='contact' id='contact'>
     <h1 className='heading'><span className='m'>CONTACT</span>US</h1>
     <div className='row'>
      
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7007.420757670993!2d77.31939236415465!3d28.578458402371297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce451af8dfa65%3A0xdb0cafb4b06c1fb!2sSector%2019%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1715516117237!5m2!1sen!2sin" width="400" height="300"
       style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

<iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224484.09638411415!2d76.92706050626927!3d28.462556594771808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50e02591b89%3A0x40c6507e316fc6bc!2sPG!5e0!3m2!1sen!2sin!4v1715530710797!5m2!1sen!2sin"
//  style={{width:"400", height:"300", border:0, loading:"lazy", referrerPolicy:"no-referrer-when-downgrade"}}
 ></iframe>
     
<form action="">
      <h3>get in touch</h3>
      <div className='inputBox'>
        <span className='fas fa-user'></span>
        <input type="text" placeholder='name' />
      </div>

      
      <div className='inputBox'>
        <span className='fas fa-email'></span>
        <input type="text" placeholder='email' />
        </div>
      

      <div className='inputBox'>
        <span className='fas fa-phone'></span>
        <input type="text" placeholder='phone' />
      </div>

      <input type="submit" value="contact now" className='btn' />
</form>
     
     </div>
     </section>
</>
  )
}

export default Contact
