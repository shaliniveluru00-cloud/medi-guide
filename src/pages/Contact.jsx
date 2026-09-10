import './css/Contact.css'
function Contact() {
  return (
   <section id='con'>
 
    <div className='contact'>
        <h1 >Contact Page</h1>
      <p>We'd love to hear from you</p>
    </div>
        
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>📧 support@mediguide.com</p>
          <p>📞 +1 234 567 890</p>
          <p>📍  INDIA</p>
        </div>

        <form className="contact-form">
           <div id='in'>
                <label for="name">Name :</label>
                <input type="text" id="fname" name="fname" placeholder="type it" required/> 
            </div >
            <br/>
             <div id='in'>
                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" placeholder="type it" required/> 
            </div>
            <br/>
             <div id='in'>
                <label for="phone">Phone no:</label>
                <input type="tel" id="phone" name="phone" placeholder="type it" required/> 
            </div>
            <br/>
          <textarea rows="5" placeholder="Your Message" id='in'></textarea>
            <br/>
          <button id='in' type="submit">
            Send Message
          </button>
        </form>
      </div>
   </section>
  );
}

export default Contact; 