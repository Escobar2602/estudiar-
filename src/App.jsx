import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Primera from './pages/primera';


const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1 className='text-red-400 text-9xl'>prueba</h1>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/primera">primera</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/primera" element={<Primera />} />

      </Routes>
    </div>
  );
};

export default App;
