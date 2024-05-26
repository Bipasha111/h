
import React from 'react'
import { review } from '../Data'
import qoute from "../assets/Reviews/reviews.png"

const Review = () => {
  return (
    <>
    <section className='review' id='review'>
     <h1 className='heading'><span className='m'>CUSTOMER'S</span>REVIEW</h1>
     <div className='box-container'>
        {
            review.map((item, index)=>{
                return <>
            
                <div className='box'>
                    <img src={qoute} alt="" className='qoute' />
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus 
                        Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.</p>
                        <img src={item.img} alt="" style={{height:"100px",width:"100px", borderRadius:"50%"}}  />
                        <h3>prince kumer</h3>
                        <div className='starts'>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star-half-alt"></a> 
                                                </div>
                </div>

                
                </>
            })
        }

     {/* {menu.map((item,index)=>{
       return<>
       <div className='box'>
         <img src={item.img} alt="" />
         <h3 className=''></h3>
         <div className='price'>
           $15.99 <span>20.99</span>
         </div>
         
         <a href="" className='btn'>add to cart</a>

       </div>
       </>
     })} */}
     </div>
    </section>
      </>
  )
}

export default Review
