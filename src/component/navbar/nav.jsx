import './nav.css'

const Nav = () => {
  
  return (
    <nav>
        <div className='container row'>

        <div className='logo_container'>
            <div className='logo'>Escape. </div>
        </div>

        <div className='nav_items row ' >
            <a href='#' re>Home</a>
            <a href='#categories' >Categories</a>
            <a href='#contact' >Contact</a>
            <a href='#about' >About</a>
        </div>

        </div>
    </nav>
  )
}

export default Nav