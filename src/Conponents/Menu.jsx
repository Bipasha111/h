
import React from 'react'
// import { Menu1 } from '../Data'
import { menu } from '../Data'


const Menu = () => {
  return (
       <>
     <section className='menu' id='menu'>
      <h1 className='heading'><span className='m'>menu</span>our</h1>
      <div className='box-container'>
      {menu.map((item,index)=>{
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
      })}
      </div>
     </section>
       </>
  )
}

export default Menu
