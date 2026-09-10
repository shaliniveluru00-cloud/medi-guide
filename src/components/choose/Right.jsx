import React from 'react'
import './Right.css'
const Right = () => {
  return (
  
   
      <div className="hero-right">

      <div className="floating-card ai-card">
        <span>🧠</span>
        <p>AI Analysis</p>
      </div>

      <div className="floating-card doctor-card">
        <span>👨‍⚕️</span>
        <p>Expert Doctors</p>
      </div>

      <div className="floating-card secure-card">
        <span>🔒</span>
        <p>Secure & Private</p>
      </div>

      <div className="floating-card schedule-card">
        <span>📅</span>
        <p>Smart Scheduling</p>
      </div>

      <div className="phone">

        <div className="phone-content">

          <div className="chat-header">
            <h3>Hello! 👋</h3>
            <h2>I'm MediGuide AI</h2>
            <p>How can I help you today?</p>
          </div>

          <div className="chat user">
            I have headache and fever since 2 days
          </div>

          <div className="chat bot">
            I'll analyze your symptoms and suggest the best specialists.
          </div>
          <div className="chat bot2">
           ...
          </div>
        </div>

      </div>

    </div>
        
  )
}

export default Right