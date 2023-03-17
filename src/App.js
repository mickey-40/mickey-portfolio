import './App.css'
import {Route, Router, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
