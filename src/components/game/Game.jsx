import React, { useState, useEffect } from 'react';
import "./game.css";
import Image1 from '../../assets/svg.png';
import Image2 from '../../assets/femme.png';
import Image3 from '../../assets/homme.png';
const data = [
  {
    "id": 0,
    "image": Image1,
    "title": "Moubarack",
    "subtitle": "Data Scientist",
    "comment": "I enjoy working on the theme and learn so much. You guys make the process fun and interesting. Good Luck ! 🤞"
  },
  {
    "id": 1,
    "image": Image2,
    "title": "Lydia",
    "subtitle": "Comptable",
    "comment": "I enjoy working on the theme and learn so much. You guys make the process fun and interesting. Good Luck ! 😃"
  },
  {
    "id": 2,
    "image": Image3,
    "title": "M. Cir",
    "subtitle": "PDG of Aquapro",
    "comment": "I enjoy working on the theme and learn so much. You guys make the process fun and interesting. Good Luck ! 🦸🏾‍♂️"
  },
]

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }, 3000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <section className="testimonials container section" id="game">
      <h2 className="section__title">Clients & Reviews</h2>

      <div className="testimonials__container grid">
        <div className="testimonial__item">
          <div className="thumb">
            <img src={data[currentIndex].image} alt="" width={50} height={50} />
          </div>
          <h3 className="testimonials__title">{data[currentIndex].title}</h3>
          <span className="subtitle">{data[currentIndex].subtitle}</span>
          <div className="comment">{data[currentIndex].comment}</div>
        </div>
      </div>
    </section>
  )
}

export default Game;
