
import './App.css';
import NavBar from './Conponents/NavBar';
import Home from './Conponents/Home';
import About from './Conponents/About';
import Menu from './Conponents/Menu';
import Products from './Conponents/Products';
import Review from './Conponents/Review';
import Contact from './Conponents/Contact';
import Blog from './Conponents/Blog';
import Footer from './Conponents/Footer';


import Body from './html file/Body';
// import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>

 <NavBar/>
   <Home/>
   <Body></Body>
   <About/>
   
   <Menu/>
   <Products/>
   <Review/>
   <Contact/>
   <Blog/>
   <Footer/>
   {/* <Routes>
    <Route path='/search' element={<Body></Body>}/>
   </Routes> */}
  

   
   
 
   </>
  );
}

export default App;
