// import logo from './logo.svg';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Roadmap from './components/pages/Roadmap';
import { GlobalFontStyles } from './fonts/fonts';

function App() {

  const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  fontFamily: 'FuzzyBubbles',
};

  const navStyle = {
    marginBottom: 0,
    display: 'flex',
    justifyContent: 'left',
    width: '100vw',
    height: '10vh',
  }
  return (
    <div className="App">
        <GlobalFontStyles />
      

      <div className="App-wrapper">
        <BrowserRouter> 
          <nav style={navStyle}> 
            <Link style={linkStyle} to="/">Home</Link> 
            <Link style={linkStyle} to="/roadmap">Roadmap</Link>
            <Link style={linkStyle} to="/about">About</Link>
          </nav>
      <BackgroundImage>

          <div className="App-body">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
          </div>
      </BackgroundImage>
          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
