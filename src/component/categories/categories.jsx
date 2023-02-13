import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'
import './categories.css'

const Categories = () => {
  return (
    <>
      <div className='categories_container'>
      {<Navbar />}
        <div className="hero-section">         
          <h2>Categories</h2>
        </div>
      </div>

      <div className="section2 container">
          <div className="s2-items">
          <a href= '#/' className="s2-item">
            <h3 >Nature</h3>
          </a>
          <a href= '/' className="s2-item b">
            <h3 >Photography</h3>
          </a>
          <a href= '/' className="s2-item c">
            <h3 >Relaxation</h3>
          </a>
          <a href= '/' className="s2-item d">
            <h3 >Vacation</h3>
          </a>
          <a href= '/' className="s2-item e">
            <h3 >Travel</h3>
          </a>
          <a href= '/' className="s2-item f">
            <h3 >Adventure</h3>
          </a>         
          </div>
        
      </div>
      {<Footer />}
    </>
  )
}

export default Categories