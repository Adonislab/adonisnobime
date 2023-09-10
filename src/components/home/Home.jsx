import React, { useState, useEffect } from "react";
import "./home.css";
import Me from "../../assets/Photo.JPG";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("NOBIME Tanguy Adonis");

  const liste = [
    "Data scientist.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < liste.length) {
        setCurrentIndex(currentIndex + 1);
        setDisplayedText(liste[currentIndex]);
      } else {
        setCurrentIndex(0);
        setDisplayedText(liste[0]);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <section className="home container" id="home">
      
      <div className="intro">
        <h1 className="home__name">You are welcome to my website !</h1>
        <img src={Me} alt="" className="home__img" width={100} height={100}/>
        <h2 className="home__name">NOBIME Tanguy Adonis</h2>
        <h3 className="home__name">I'm  <span className="home__education">{displayedText}</span></h3>

        <HeaderSocials/>

        <a href="#contact" className="btn">Perform a sentiment analysis test</a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home