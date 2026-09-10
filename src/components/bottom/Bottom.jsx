import './Bottom.css'
import convo from '../../assets/convo.png';
import ai from '../../assets/aib.jpg';
import doc from '../../assets/doc.png';
import appoi from '../../assets/appoi.png';
const Bottom = () => {
  return (
         <section className="steps">
            <h2>How MediGuide Works</h2>
            <div className="steps-container">
               <div className="step">
                    <img src={convo} alt='logo'/>
                    <h3>Describe Symptoms</h3>
                    <p>Tell us about your symptoms in your own words or use voice input.</p>
               </div>
              
               <div className="step">
                   <img src={ai} alt='logo'/>
                    <h3>AI Analysis</h3>
                    <p>Our AI analyzes your symptoms and determines the appropriate specialty.</p>
                    </div>
                
                <div className="step">
                    <img src={doc} alt='logo'/>
                    <h3>Get Recommendations</h3>
                    <p>We recommend the best doctors and available appointment slots.</p>
                </div>
                
                <div className="step">
                    <img src={appoi} alt='logo'/>
                    <h3>Book Appointment</h3>
                    <p>Choose your preferred slot and book your appointment instantly.</p>
                </div>
            </div>
            <div className='foot'>
                 <div className='f'>
                    <i class="bi bi-fingerprint"></i>
                    <div>
                        <p id='fst'>Trusted by 10,000+ Patients </p>
                        <p id='snd'>Quality Healthcare you can trust</p>
                    </div>
                    
                </div>
                <div className='f'>
                    <i class="bi bi-clock-history"></i>
                    <div>
                        <p id='fst'>24/7 AI Support </p>
                    <p id='snd'>Get help Anytime,Anywhere</p>
                    </div>
                    
                </div>
                <div className='f'>
                    <i class="bi bi-people"></i>
                    <div>
                        <p id='fst'>100+ Special Doctors </p>
                        <p id='snd'>Across 20+ specialities</p>
                    </div>
                    
                </div>
            </div>
       </section>
  )
}

export default Bottom