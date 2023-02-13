import Navbar from '../navbar/Nav'
import './about.css'

const About = () => {
  return (
    <>
      <div className='about_container'>
        {<Navbar />}
        <h2>We love writing</h2> 
      </div>
    </>
   
  )
}

export default About