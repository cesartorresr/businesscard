
import './App.css';
import { Info } from './Components/Info';
import { About } from './Components/About';
import { Interest } from './Components/Interest';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  );
}

export default App;
