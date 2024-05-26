
import React from 'react'
import { product } from '../Data'

const Products = () => {
  return (
    <>
       <section className='products' id='products'>
        <h1 className='heading'> <span className='m'>our</span>products</h1>


        <div className='box-container'>
            {product.map((item,index)=>{
                                       return<>
                                                 <div className='box'>
                                                 <div className='icons'>
                                                    <a href="#" className="fas fa-shopping-cart"></a>
                                                    <a href="#" className="fas fa-heart"></a>
                                                    <a href="#" className="fas fa-eye"></a>
                                                </div>
                                                 <div  className='image'>
                                                   <img src={item.img}/>
                                               </div>
                                                <div className='content'>
                                                    <h3>fresh coffee</h3>
                                                </div>
                                                <div className='starts'>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star"></a>
                                                <a href="#" className="fas fa-star-half-alt"></a> 
                                                </div>
                                               
                                               
                                               <div className='price' style={{color:"#fff",fontSize:"2.5rem"}}>
                                                 15.99 <samp>10.99%</samp>
                                                </div>
                                        
                                            </div>
                                            
  
                    
            
         
            
                   
                    </>
                  })}

                 
            

        </div>

       </section>
    </>
  )
}

export default Products
