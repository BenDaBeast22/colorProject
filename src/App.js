import logo from './logo.svg';
import './App.css';
import Palette from './Palette';
import paletteSeeds from './paletteSeeds';
import { generatePalette } from './colorHelpers';

function App() {
  console.log(generatePalette(paletteSeeds[4]));
  return (
    <div className="App">
      <Palette {...paletteSeeds[4]}/>
    </div>
  );
}

export default App;
