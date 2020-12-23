import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      </div>
      <Footer/>
    </div>
  );
}

export default App;
