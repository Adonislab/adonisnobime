import React from 'react';
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Game from "./components/game/Game";
import Contact from "./components/contact/Contact";
import Pricing from "./components/pricing/Pricing";
import Blog from './components/blog/Blog';
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Game/>
        <Blog/>
        <Contact/>
        
      </main>
    </div>
  )
}

export default App