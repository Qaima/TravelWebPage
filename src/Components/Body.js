import React, {useState} from 'react'
import './Body.css';

function Body() {

    //Corousal

    const [currentSlide, setCurrentSlide] = useState(0);
    const images =[
    '/Images/Card-1.jpg',
    '/Images/Card-2.jpg',
    '/Images/Ladakh-Main.jpg',
    ];

    const nextSlide =() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length)
    };


    //Para

    const [isParagraphVisible, setParagraphVisibility] = useState(false);

    // Function to toggle the visibility of the paragraph
    const toggleVisibility = () => {
      setParagraphVisibility(!isParagraphVisible);
    };


  return (
    <>
    <div id="Photos">
      <h1 className="photo1">&#x1F5BC; Photos</h1>

      <div className="carousel">
      <button className="prev-button" onClick={prevSlide}>&#8249;</button>
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="slide"/>
      <button className="next-button" onClick={nextSlide}>&#8250;</button>
    </div>
      <hr className="photoHr"></hr>
    </div>

    <diV id="Itinerary">

        <header>
            <h1 className="photo1"> Long Itinerary</h1>
        </header>
        
        <h4 className="day"> Day-1  <span className="ItinaryHeading" onClick={toggleVisibility}>Arrival in Leh +</span> </h4>
        {isParagraphVisible && (
        <p className='body-para'>On arrival, Meeting and
         assistance on arrival and transfer to Hotel. Time 
         free to acclimatize till 4 O’clock. PM walk upto
          Samker Gompa. Samker Gompa is little up in the 
          valley, 3 Kms from Leh Town, which is open to 
          visitors in the morning and
         evening only. The Gompa belongs to Yellow Sect
          & was founded in 18th Century. The Gompa is 
          the seat of the Head Lama of Ladakh & founder 
          of yellow sect, Tson-Kha-Pa. The temple walls 
          have recent painted of figures including 
          Sakyamuni, Avalokiteshwara, Padmasambhava, 
          Tson-Ka-pa and green Tara. Dinner and 
          overnight in Leh Hotel. </p> )}


          <h4 className="day"> Day-2  <span className="ItinaryHeading" onClick={toggleVisibility}> Leh s/s +</span> </h4>
       
          {isParagraphVisible && (
       <p className='body-para'> After breakfast drive 
       up along the scenic Indus valley. Visit MAGNETIC
        HILL : Defying the Law of gravity. This place is
         close to the Gurdwara Shri Patthar Sahib. It 
         has been noticed that when a vehicle is parked 
         on neutral gear on this metallic road the
          vehicle slides up-hill that’s the Believe it 
          or not of Ladakh. GURDWARA SHRI PATTHAR SAHIB:
           The Shrine known as Gurdwara Patthar sahib is
            situated about 25 kms. Short of Leh town on
             the Leh-Srinagar road. Built in the everlasting
              memory of Shri Guru Nanak Deve Ji the great
               prophet who sanctified the place by his 
               sacred visit during the year 1517 while on 
               his second missionary tour (2nd Udassi 1515-1518). 
               </p>
          )}


       <h4 className="day"> Day-3  <span className="ItinaryHeading" onClick={toggleVisibility}> Leh- Khardugla Top-Leh +</span> </h4>
       
       {isParagraphVisible && (
       <p className='body-para'> Day excursion to 
       Khardongla pass, which is the highest motorable pass
        in the world 5600 Mtrs and has been recorded in the 
        Gunnies Book of World Records. At the top enjoy the 
        nature beauty of snow-capped mountains. In the
         afternoon Leh SS Shanti Stupa Shanti Stupa is 
         located at about 1km from Leh. It was built by a 
         Japanese order and has wonderful views over Leh 
         and the Indus valley especially at sunset. The stupa
          was built in 1980s and is a beautiful monument 
          decorated with colourful paintings and enshrines 
          large statues of Buddha. Return Leh for Dinner and 
          overnight in Leh Hotel.</p>
       )}


       <h4 className="day"> Day-4  <span className="ItinaryHeading" onClick={toggleVisibility}> Leh Pan +</span> </h4>
       
       {isParagraphVisible && (
       <p className='body-para'> Leave early morning after
        breakfast leave for Pangong. Lake through Changla
         passes 5486 Mtrs. While ascending Changla pass
          5486 Mtrs. Enjoy the beautiful panoramic view of
           the villages below the pass. After crossing the 
           pass halt for break at Tsoltak, the summer
            pastureland of the yaks. Arrive Durbuk and from
             there a short drive takes you to the western 
             shore of the lake. Enjoy the landscape in the 
             back drop of the Lake. This famous blue 
             brackish Lake of Pangong is 5/6 Kms wide and
              over 144 Kms long with half of it's running
               the other side of the “INDO CHINA BORDER”.
                One rarely feels so close to nature and 
                environment and the scenery is unforgettable.
                 Overnight & dinner in Camp.</p>
       )}


       <h4 className="day"> Day-5  <span className="ItinaryHeading"onClick={toggleVisibility}> Pangong-Leh +</span> </h4>
       
       {isParagraphVisible && (
       <p className='body-para'> Breakfast at the Camp.
        Drive back the same route for Leh. On arrival in 
        Leh, check in at the Hotel Leh Afternoon Free to
         explore surroundings of Leh Dinner and overnight
          in Leh Hotel.</p>
       )}


       <h4 className="day"> Day-6 <span className="ItinaryHeading" onClick={toggleVisibility}> Leh/Departure +</span> </h4>
       
       {isParagraphVisible && (
       <p className='body-para'> Early morning Breakfast In 
       time transfer to Leh Airport to connect the flight 
       for Delhi.</p>
       )}

     <div>
     <hr className="photoHr"></hr>
     </div>

     
    
    
    
    

    </diV>

    </>
    
    



  )
}

export default Body
