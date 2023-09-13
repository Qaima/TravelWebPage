import React,{useState} from 'react'
import {NavLink, Outlet} from "react-router-dom"
import './Navbar.css';
import Form from './Form';
import './Form.css';
import Table from './Table';
import Button from './Button';
import Footer from './Footer';
import Body from './Body';



function Navbar() {
  

  return (
    <>
    <div className= "container-fluid ">
        
      
      <nav className="navbar">
         
      

           <NavLink id="navbar-brand" >
            TMIC
            </NavLink> 

         <ul className='navbar-nav '>
            <li className="nav-item">
                <NavLink 
          
                to="/Contact"
                className="nav-link active" 
                replace="true"
                exact
                >CONTACT
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
               
                to='/PhotosVideos' 
                className="listNumber" 
                exact
                >PHOTOS AND VIDEOS
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink 
                
                to='/WhyChooseUs' 
                className="listNumber" 
                exact
                >WHY CHOOSE US?
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink
                 
                to='/TourPackage' 
                className="listNumber" 
                exact
                >TOUR PACKAGES
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink 
                
                to='/Home' 
                className="listNumber" 
                exact
                >HOME
                </NavLink>
            </li>
         </ul>
         
           
       </nav>
       <Outlet/>
      <div>
            
            <img className="ladakh-main"src="\Images\Ladakh-Main.jpg" alt="Ladakh.png" />
           </div>

           <div> 
             <Button/>
           </div>
   </div>

   <div >
     <nav className='navbar1'>
     <ul className='navbar-nav1 '>
            <li className="nav-item1">
                <a
                href='\Details' 
                className="" 
                >Details
                </a>
            </li>

            <li className="nav-item1">
                <a
                href='#Photos'
                className="" 
                >Photos 
                </a>
            </li>

            <li className="nav-item1">
                <a
                href='#Itinerary' 
                className="" 
                >Itinery
                </a>
            </li>

            <li className="nav-item1">
                <a 
                href='/Map' 
                className="" 
                >
                Map
                </a>
            </li>

            <li className="nav-item1">
                <a 
                href='/TermsandConditions' 
                className="" 
                >Terms and Conditions
                </a>
            </li>
         </ul>
         <hr></hr>
     </nav>
   </div>
            <div>
              <h1 className="heading1"> Moon Land Ladakh</h1>
              <br></br>
              
              <ul className='Criteria'>
                <li className="Criteria-item">{"\u23F0"} 8 Nights 9 Days</li>
                <li className="Criteria-item">{"\uD83D\uDC65"} Min People: 02</li>
                <li className="Criteria-item"> {"\uD83D\uDCCC"}Pickup: Airport</li>
              </ul>
              <br></br>
              <br></br>

              <hr className='Horizontal-line'></hr>
              <br></br>
            
              <hr className='Horizontal-line'></hr>

            </div>

            <div>
                <p className='para'>About the Tour Package:</p>
                <p className='para'><b>Leh Ladakh Tour Packages:</b> Explore best offers 
                    on <b>Ladakh tours</b> at TMIC. Book customized Ladakh
                     packages with exciting deals & offers. If you
                      are looking for a budget Ladakh tour package 
                      to a thrilling Leh Ladakh tour,  you can 
                      choose from the wide array of options we have.
                       Our best selling Leh Ladakh tour packages will
                        cover all major destinations and will offer 
                        you enough free time to indulge in local 
                        experiences. </p>
            </div>
<div>
    <Form/>
    </div>  

       <div>
       
        <Table/>
       </div>

       <div>
        <Body/>
       </div>

       <div>
        <Footer/>
       </div>

   
    </>
  )
}

export default Navbar
