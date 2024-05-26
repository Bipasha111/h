
import React from 'react'
import { blog } from '../Data'


const Blog = () => {
  return (
    <>
          <section className=' blogs' id='blogs'>
          <h1 className='heading'><span className='m'>OUR</span>BLOG</h1>

          <div className='box-container'>
            {
               blog.map((item,index)=>{
                return <>
                <div className='box'>
                  <div className='image'>
                  <img src={item.img} alt="" />
                  </div>
                  <div className='content'>
                    <a href="#" className='title'>
                        testy and refreshing spices
                    </a>
                    <span>by admin/21 may,2024</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae! Ut est maiores fugiat et iure tenetur nisi tempore delectus similique
                         beatae quibusdam, natus veniam commodi nulla illo voluptatibus ad.
                    </p>
                    <a href="#" className='btn'>read more</a>
                  </div>
                </div>
                </>
               }) 
            }
          </div>
          </section>
    </>
  )
}

export default Blog
