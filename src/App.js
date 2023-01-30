
import React from 'react';
import About from "./components/About";
import './App.css';
import Home from './Home';
import Commissions from './components/Commissions';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
       <About />
      <Commissions /> 
    </div>
  );
}

export default App;
