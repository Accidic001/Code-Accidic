
import NavBar from './components/navBar';
import { Routes, Route , Link} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Courses from './Pages/Courses';
import Html from './Pages/Html';
import Javascript from './Pages/Javascript';
import Css from './Pages/Css';
import './App.css';


function App() {
    return (<>
      
        <div className="">
          <NavBar/>
          <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Courses' element={<Courses />}/>
          <Route path='/Html' element={<Html />}/>
          <Route path='/Css' element={<Css />}/>
          <Route path='/Javascript' element={<Javascript />}/>
        </Routes>
        
        </div>
      </>
      
    );
}

export default App;
