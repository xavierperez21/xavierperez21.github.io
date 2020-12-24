import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import './styles/App.css';

function App() {
    return (
    <div className="App">
        <Navbar/>
            <section className="home">
                HOME
            </section>
            <section className="portfolio">
                PORTFOLIO
            </section>
            <section className="education">
                EDUCATION
            </section>
            <section className="about">
                ABOUT
            </section>
            <section className="contact">
                CONTACT
            </section>
        <Footer/>
    </div>
    );
}

export default App;
