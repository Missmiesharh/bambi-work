import './home.css'
import Navbar from '../navbar/Nav'

const Home = () => {
  return (
    <>
      <div className='container home_container'>
        {<Navbar />}
        <section className='sec1'>
          <div className="sec1_text">
            <h2>Let's do it together. </h2>
            <p>We travel the world in search of stories. Come along for the ride. </p>
          </div>
          <button className='btn'><a href> View Latest Post </a></button>
        </section >
      </div>

      <section className='sec2'>
        <ul className='sec2_items '>
          <li><a href='..' className='sec2_item'>Nature</a></li>
          <li><a href='..' className='sec2_item'>Photography</a></li>
          <li><a href='..' className='sec2_item'>Relaxation</a></li>
          <li><a href='..' className='sec2_item'>Vacation</a></li>
          <li><a href='..' className='sec2_item'>Travel</a></li>
          <li><a href='..' className='sec2_item'>Adventure</a></li>
        </ul>
      </section>

      <section className='container sec3'>
        <div className="sec3_text">
          <h1>Featured Posts</h1>
        </div>

        <div className="images ">
        <div className=" container image">
          <div className="featured-text">
            <h3>The Road Ahead</h3>
            <p> The road ahead might be paved-it might not be</p>
          </div>
          <div className="featured-details ">
            <div className="image1">
              <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg" alt="" className="author-img" />
              <div className="author-title lite">Mat Vogels</div>
              <div className="thumbnail-date lite">September 25, 2015</div>
            </div>

          </div>
        </div>
        
        <div className=" container image">
          <div className="featured-text">
            <h3>The Road Ahead</h3>
            <p> The road ahead might be paved-it might not be</p>
          </div>
          <div className="featured-details ">
            <div className="image1">
              <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7ff9f8de8335_128-14.jpg" alt="" className="author-img" />
              <div className="author-title lite">Mat Vogels</div>
              <div className="thumbnail-date lite">September 25, 2015</div>
            </div>
        </div>

          </div>
        </div>
      </section>

    </>

  )
}

export default Home

