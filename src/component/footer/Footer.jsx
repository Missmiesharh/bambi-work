// import Navbar from '../navbar/Nav'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">

        <div className="f-content">
        <div className="footer-text">
          <h1>Stay in Touch</h1>
        </div>
        <div className='med-divider'></div>
        <div className="footer-content row">
          <input type="email" class="field w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email address" id="email" required=""></input>
          <button type='submit' className='submit-button w-button'>Submit</button>
        </div>
        </div>
        <div className='footer-section'>
          <div className="f-container row">
            <div className='logo'>Escape. </div>

            <div className='nav_items'>
              <a href='/' className='nav_item'>Home</a>
              <a href='/categories' className='nav_item'>Categories</a>
              <a href='/contact' className='nav_item'>Contact</a>
              <a href='/about' className='nav_item' >About</a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer