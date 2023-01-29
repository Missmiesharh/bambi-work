import './nav.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { useRef } from 'react'


const Nav = () => {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <div className='container nav_container row'>
        <div className=' logo_container logo'>Escape. </div>

        <nav ref={navRef}>
          <div className='nav_items row'>
            <a href='/' className='nav_item'>Home</a>
            <a href='/categories' className='nav_item'>Categories</a>
            <a href='/contact' className='nav_item'>Contact</a>
            <a href='/about' className='nav_item' >About</a>
            <button className="nav-btn nav-close-btn" onClick={showNav}>
              <FaTimes />
            </button>
          </div>
        </nav>
        <button className="nav-btn" onClick={showNav}>
          <AiOutlineMenu/>
        </button>

      </div>
    </header>
  )

}



export default Nav