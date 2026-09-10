import React from 'react'
import './Left.css'
const Left = () => {
  return (
    <section id='left'>
        <span id='topmost'><i className="bi bi-stars"></i>   Ai powered Health care</span>
        <h1 id='head'>AI Doctor Appointment <br/> & Triange System</h1>
        <p>Describe your symptoms,get AI powered recommendations and book appointments with right speciliats</p>
            <div id='btn'>
                <button id="startconvo"><i className="bi bi-messenger"></i>Start Consultation</button>
              
              <button id="voiceip"><i className="bi bi-mic"></i>Voice input</button>
            </div>
        <span id='secure'><i className="fa-solid fa-shield"></i>your data is secure and confidential </span>
    </section>
  )
}

export default Left