import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'
import './contact.css'
import { AiOutlineTwitter, AiFillFacebook, AiFillInstagram } from 'react-icons/ai'

const contact = () => {
  return (
    <>
      <div className='contact_container container'>
        {<Navbar />}
        <h2>Let's Connect</h2>
      </div>

      <div className="mid l container">
        <div className="connect">
          <div className="contact-text">
            <h3>Connect with Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.</p>
          </div>


          <div className='contact-socials'>
            <div className="l">
              <AiOutlineTwitter />
              <p>Follow us on Twitter</p>
            </div>

            <div className="l">
              <AiFillFacebook />
              <p>Follow us on Twitter</p>
            </div>

            <div className="l">
              <AiFillInstagram />
              <p>Follow us on Twitter</p>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="form-text">
            <h2>Send Us A Message</h2>
          </div>
          <div className="form-info ">
            <div className="form-item">
              <label>Name:<input type='text' placeholder='Enter Your Name' /></label>
            </div>

            <div className="form-item">
              <label>Email Address: <input type='text' placeholder='Enter Your Email' /></label>
            </div>

            <div className="form-item">
              <label>Message: <textarea placeholder='Say what you need to say' /></label>
            </div>

            <button type='submit' className='btn btn-primary'> Submit</button>
          </div>
        </div>
      </div>

      {<Footer />}
    </>
  )
}

export default contact