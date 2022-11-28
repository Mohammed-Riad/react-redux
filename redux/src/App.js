import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>


        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
