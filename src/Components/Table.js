import React from 'react'
import './Table.css';

function Table() {
  return (

    
    <div>

        
      
        <table>
          <tr> 
            <th>Departure & Return Location </th>
            <td>Sheikh Ul Alam International Airport SXR (Google Map)</td>
          </tr>
          <hr className="hr1"></hr>
          <tr>
            <th>Price Includes</th>
            <ul className="ul1"> 
              <li> {"\u2713"}   Airport Transfer</li>
              <li>{"\u2713"}   Hotel & Houseboat Accommodation</li>
              <li>{"\u2713"} Meals</li>
              <li>{"\u2713"} Tour Guide</li>
              <li>{"\u2713"} Sightseeing</li>
              <li>{"\u2713"} All transportation in destination location</li>
            </ul>
          </tr>
          <hr className="hr1"></hr>
          <tr>
            <th>Price Includes</th>
            <ul className="ul1">
              <li>{'\u2717'}  Airfare / Train fare</li>
              <li>{'\u2717'} Items of personal nature like tips, laundry, telephone, beverages etc.</li>
              <li>{'\u2717'} Entrance fee / Local Guide / at any place during the tour </li>
              <li> {'\u2717'} Meals not mentioned in the “Inclusions” section</li>
              <li>{'\u2717'} Additional sightseeing or usages of vehicle not mentioned in the itinerary.</li>
              <li>{'\u2717'} Anything not mentioned in the package includes section.</li>
            </ul>
          </tr>
          <hr className="hr1"></hr>
          <tr>
            <th>Complementaries</th>
            <ul className="ul1">
              <li>{"\u2713"} Umbrella & Long Shoes If Required</li>
              <li>{"\u2713"} 01 Shikara Ride</li>
              <li>{"\u2713"} Welcome Drink Kehwa</li>
              <li>{"\u2713"} All Toll Taxes</li>
            </ul>
          </tr>
        </table>

        <hr className="hr2"></hr>
        <br></br>
        <hr  className="hr2"></hr>


       <div className="Big-Box">
        <div className="Box1">
        <h4 className="Box1-heading"> Why Book with us ?</h4>

        <p className="Box1-para"> {'\u0024'}  No-hassle best price guarantee</p>
        <hr className="Box1-hr"></hr>

        <p className="Box1-para"> 🎧 Customer care available 24/7</p>
        <hr className="Box1-hr"></hr>

        <p className="Box1-para">  ★ Hand-picked Tours & Activities</p>
        <hr className="Box1-hr"></hr>
       
        <p className="Box1-para"> 📄 Free Travel Insurance</p>
      </div>


      <div className="Box2">
        <div className='Box1-background'>
         <h2 className="Box2-heading"> Get a question?</h2>

         <p className="Box2-para">Do not hesitage to give us a
          call. We are an expert team and we are happy to talk
           to you.</p>
          <p className="Box2-query">  📞 48 724 834 7832</p>

          <p className="Box2-query"> 📧 info@tmicholidays.in</p>
          </div> 
       </div>
       </div>
  </div>
  )
}

export default Table
