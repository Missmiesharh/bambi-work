import './home.css'
import Navbar from '../navbar/Nav'

const Home = () => {

  const data = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: 'Still Standing Tall',
      description: 'Life begins at the end of yur comfort zone',
      author_image: "	https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
      author_name: 'William Wong',
      date: "9/25/2015"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: 'Still Standing Tall',
      description: 'Life begins at the end of yur comfort zone',
      author_image: "	https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
      author_name: 'William Wong',
      date: "9/25/2015"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: 'Still Standing Tall',
      description: 'Life begins at the end of yur comfort zone',
      author_image: "	https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
      author_name: 'William Wong',
      date: "9/25/2015"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: 'Still Standing Tall',
      description: 'Life begins at the end of yur comfort zone',
      author_image: "	https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
      author_name: 'William Wong',
      date: "9/25/2015"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: 'Still Standing Tall',
      description: 'Life begins at the end of yur comfort zone',
      author_image: "	https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
      author_name: 'William Wong',
      date: "9/25/2015"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: 'Still Standing Tall',
      description: 'Life begins at the end of yur comfort zone',
      author_image: "	https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg",
      author_name: 'William Wong',
      date: "9/25/2015"
    }

  ]
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
        <ul className='sec2_items sec3_items'>
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

        <div className="images sec2_items">
          <div className=" container image ">
            <div className="featured-text ">
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

          <div className="container image2">
            <div className="featured-text">
              <h3>From Top Down</h3>
              <p> Once a yer, go someplace you've never been before</p>
            </div>
            <div className="featured-details ">
              <div className="image1">
                <img src="https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7389de832c_128-34.jpg" alt="" className="author-img" />
                <div className="author-title lite">William Wong</div>
                <div className="thumbnail-date lite">September 25, 2015</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className='container sec4'>
          <h1>Most Recent</h1>

          <div className="most_recent sec3_item">
            {
              data.map(({ id, image, author_image, title, description, date, author_name }) => {
                return (
                  <article key={id} className='most_recent-items'>
                    <div className='most_recent-item'>
                      <div className="info">
                        <img src={image} alt='background pic' className='pic1' />
                        <div className="info_text">
                          <h3> {title}</h3>
                          <p> {description}</p>
                        </div>

                        <div className="author-info">
                          <div><img src={author_image} alt=' ' className="author-img" /> </div>
                          <div className="author-title lite"> {author_name}</div>
                          <div className="thumbnail-date lite">{date}</div>
                        </div>
                      </div>
                    </div>
                  </article>

                )


              })
            }
          </div>
        </div>
      </section>

    </>

  )
}


export default Home

