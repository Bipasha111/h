
import React, { useRef, useState } from 'react'
import logo from '../assets/logo.png'
import { card } from "../Data";

const NavBar = () => {
  const Searchref= useRef();
  const search_handdler =(e)=>{
    Searchref.current.classList.toggle("active") 
    shopref.current.classList.remove("active")
  }
  
  const shopref =useRef()
  const shoping_cart =()=>{
    shopref.current.classList.toggle("active") 
    Searchref.current.classList.remove("active")   
  }
  const [open ,setOpen] =useState(false)
  // const menuref= useRef()
  const manu_handdler =()=>{
    // menuref.current.classList.toggle("active") 
    setOpen(!open)
       
  }
  return (
    <>
    <header className='header'>
           <a href="#" className='logo'>
            <img src={logo} className='logo' alt="" />
           </a>
           <nav className={open?"open":"navBar"}
            // ref={menuref} 
            >
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#products">products</a>
            <a href="#review">review</a>
            <a href="#menu">menu</a>
            <a href="#contact">contact</a>
            <a href="#blogs">blogs</a>
           </nav>
           <div  className='icon'>
                 <div className='fas fa-search'        onClick={search_handdler}></div>
                 <div className='fas fa-shopping-cart' onClick={shoping_cart}  ></div>
                 <div className='fas fa-bars'          onClick={manu_handdler} id='menu-btn'></div>
              
            </div>
            <div className='search-form' ref={Searchref} >
                <input type="search" placeholder='search here.......' id='searchbox'  />
                {/* <input ype="search" placeholder='search here.......' id='searchbox'>Search</input> */}
                <label htmlFor="searchbox" className='fas fa-search '  > </label>
            </div>
            
                       {/* cart section */}
            <div className='cart-items-container'  ref={shopref}>
            {card.map((item,index)=>{
      return<>
      <div className='cart-item' key={index}  >
           <span className='fas fa-times cross'></span>
           <img src={item.img}></img>
           <div className='content'>
                <h3>cart item 01</h3>
                <div className='price'>$15</div>
          </div>
      </div>
      </>
    })}
   <div className='bbtn'> <a href="" className='btn'>checkout now</a></div>
            </div>
    </header>
    </>
  )
}

export default NavBar
