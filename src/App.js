import './App.css';
import Navbar from './component/navbar/nav'
import Home from './component/home/home'
import Categories from './component/categories/categories'
import About from './component/about/about'
import Contact from './component/contact/contact'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>       
      <Routes>
        <Route exact path='/' element={< Navbar />}></Route>
        <Route exact path='#' element={< Home />}></Route>
        <Route exact path='#categories' element={< Categories/>}></Route>
        <Route exact path='#contact' element={< Contact/>}></Route>
        <Route exact path='#about' element={< About />}></Route>
      </Routes>
    
     
    </Router>
   
    
   
   
  );
}

export default App;
