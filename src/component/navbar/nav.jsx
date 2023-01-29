import './nav.css'


const Nav = () => {
    
  return (
    <section>
        <div className='container nav_container row'>

        <div className='logo_container'>
            <div className='logo'>Escape. </div>
        </div>

        <div className='nav_items row ' >
            <a href='/' className='nav_item'>Home</a>
            <a href='/categories'  className='nav_item'>Categories</a>
            <a href='/contact' className='nav_item'>Contact</a>
            <a href='/about' className='nav_item' >About</a>
        </div>

        </div>
    </section>
  )
}

export default Nav