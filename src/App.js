import logo from './logo.svg';
import './App.css';
import BackgroundImage from './components/BackgroundImage';
import TestComp from './components/TestComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BackgroundImage>
        <h3 style={{ color: '#FFD900', textShadow: '2px 2px 4px #000000' }}>
          ogfrogfr
        </h3>
        <p>coming soon</p>
        <TestComp/>
        </BackgroundImage>
        <TestComp></TestComp>
      </header>
    </div>
  );
}

export default App;
