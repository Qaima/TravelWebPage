import './App.css';
import React from 'react';

import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import TourPackage from "./Components/TourPackage";
import WhyChooseUs from "./Components/WhyChooseUs";
import PhotosVideos from "./Components/PhotosVideos";
import Contact from  "./Components/Contact";


const App = () => {
  return (
    
    <>
     
     <Navbar/>
      
      <Routes>      
          
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/TourPackage" element={<TourPackage/>} />
          <Route exact path="/WhyChooseUs" element={< WhyChooseUs/>} />
          <Route exact path="/PhotosVideos" element={<PhotosVideos/>} />
          <Route exact path="/Contact" element={<Contact/>} />

          
      </Routes>

      
    </>
   
   
    
  );
};

export default App;
