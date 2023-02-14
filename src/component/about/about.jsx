import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'
import './about.css'

const About = () => {
  return (
    <>
      <div className='about_container'>
        {<Navbar />}
        <h2>We love writing</h2> 
      </div>
      <div className="mid-section container">
        <div className='about_pic'>
          <img src='https://assets.website-files.com/5e4b1929fccc7f2575de825e/5e4b1929fccc7f1c02de82bd_looking-to-lake-prof.jpg' alt='about pic' />
        </div>
        <div className="about-text">
          <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content. </p>
          <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila! </p>
          <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the "When inside of" nested selector system.</p>
        </div>
      </div>
      {<Footer />}
    </>
   
  )
}

export default About