import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';
import Slider from './Components/Slider/Slider'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Slider />
    </Router>
     
    </>
  );
}

export default App;
