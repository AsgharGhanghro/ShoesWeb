import React from 'react'
import './App.css';
import Home from './Website/Page2.0/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Website/Page2.0/Navbar';
import Footer from './Website/Page2.0/Footer';
import Products from './Website/Component2.0/Products';
import Services from './Website/Component2.0/Services';
import Contacts from './Website/Component2.0/Contacts';
import Reviews from './Website/Component2.0/Reviews';
import Abouts from './Website/Component2.0/Abouts';


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Navbar />
      <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/products" element={<Products/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/contacts" element={<Contacts/>} />
      <Route  path="/reviews" element={<Reviews/>} />
      <Route  path="/abouts" element={<Abouts/>} />
     </Routes>

     <Footer />
     </BrowserRouter>
    </div>
  )
}

export default App;







// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
// //     breakpoint: { max: 4000, min: 3000 },
// //     items: 5
// //   },
// //   desktop: {
// //     breakpoint: { max: 3000, min: 1024 },
// //     items: 3
// //   },
// //   tablet: {
// //     breakpoint: { max: 1024, min: 464 },
// //     items: 2
// //   },
// //   mobile: {
// //     breakpoint: { max: 464, min: 0 },
// //     items: 1
// //   }
// // };


     /* <Carousel responsive={responsive} className='flex items-center justify-between'>
  <div>Asghar</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>; */