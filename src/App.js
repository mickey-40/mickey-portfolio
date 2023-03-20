import './App.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Experience from './pages/Experience.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import ProjectDisplay from './pages/ProjectDisplay.js';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
        </Routes> 
        <Footer/>
    </div>
  );
}

export default App;
