import React from 'react'
import './Form.css';

function Form() {
  return (
    <div className='sticky-form'>
    <div className='query'>
        <form>
            <div>
                <h2> Quick Enquiry</h2>
                <h3> TMIC</h3>
                <label> Name</label>
                <p><input className="one"type="text" placeholder='First'/> </p>
                <p> <input type="text" placeholder='Last'/></p>
                
            </div>

            <div>
                <label> Phone </label>
                <p><input type="text" /></p>
            </div>

            <button className='btn-submit' type="submit"> Submit </button>
      
            <p> Do not submit confidential information such as 
                credit card details, mobile and ATM PINs, OTPs, 
                account passwords, etc.</p>
      </form>
    </div>
    </div>
  )
}

export default Form
