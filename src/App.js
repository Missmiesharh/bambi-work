
import Home from './component/home/Home'
import Categories from './component/categories/Categories'
import About from './component/about/About'
import Contact from './component/contact/Contact'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>       
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/categories' element={< Categories/>}></Route>
        <Route exact path='/contact' element={< Contact/>}></Route>
        <Route exact path='/about' element={< About />}></Route>
      </Routes>
    
     
    </Router>
   
    
   
   
  );
}

export default App;
