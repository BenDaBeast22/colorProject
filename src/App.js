import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import paletteSeeds from './paletteSeeds';

function App() {
  return (
    <div className="App">
      <Palette {...paletteSeeds[4]}/>
    </div>
  );
}

export default App;
