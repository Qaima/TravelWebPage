import React from 'react'
import './Button.css';

function Button() {
  return (
    <>

<div className="SocialButtons">
      <a className="a-3" href="#mesanger">
        <img className="image" src="\Images\Messenger.jpg" alt="messenger Logo" />
        </a>
      <a className="a-4" href="Instagram">
        <img className="image" src="\Images\Instagram.jpg" alt="Instagram Logo" />
       </a>
      <a className="a-5" href="Facebook">
        <img className="image" src="\Images\Facebook.jpg" alt="Facebook Logo" />
        </a>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <div>
      <a className="a-1"href="#Gallery">{'\uD83D\uDDBC'} Gallery</a>

      <a className="a-2" href="#Videos">{'\uD83D\uDCF9'} Videos</a>
     </div> 

     

    
    </>
  )
}

export default Button


