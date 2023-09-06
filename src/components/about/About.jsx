import React from 'react';
import "./about.css";
import Photo from "../../assets/Photo.JPG";
import AboutBox from './AboutBox';

const data = [
  {
    "id":0,
    "name":"Python Developper",
    "number":"95%",
    "percentage":95,
  },
  {
    "id":9,
    "name":"R Developper",
    "number":"85%",
    "percentage":85,
  },
  {
    "id":1,
    "name":"Java Script Developper",
    "number":"95%",
    "percentage":95,
  },
  {
    "id":2,
    "name":"Data Science",
    "number":"80%",
    "percentage":90,
  },
  {
    "id":3,
    "name":"Robotic and IA Application",
    "number":"70%",
    "percentage":70,
  },
  {
    "id":4,
    "name":"MLOPS",
    "number":"70%",
    "percentage":70,
  },
  {
    "id":5,
    "name":"C/C ++ Developper",
    "number":"75%",
    "percentage":75,
  },
  {
    "id":6,
    "name":"Mobile Developper",
    "number":"50%",
    "percentage":50,
  }, 
  {
    "id":7,
    "name":"Pentesting",
    "number":"40%",
    "percentage":40,
  }, 
  {
    "id":8,
    "name":"Blockchain Developper",
    "number":"30%",
    "percentage":30,
  }, 
]

function getPercentageClass(percentage) {
  if (percentage >= 80) {
    return 'high-percentage';
  } else if (percentage >= 50) {
    return 'medium-percentage'; 
  } else {
    return 'low-percentage';
  }
}

const About = () => {
 
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About me</h2>
      <div className="about__container grid">
        <img src={Photo} alt="" className="about__img" width={200} height={200}/>

        <div className="about__data grid">

          <div className="about__info">

            <p className="about__description">
            Artificial intelligence is a passion and i work on it every day to 
            reach the top with great publications. I intend to be one of the 
            next scientists to develop the best models in the field of 
            healthcare (an area that is particularly close to my heart) and 
            the applications of powerful linguistic models. I'm most interested 
            in combining robotics and artificial intelligence to develop a 
            mini-robot capable of operating without skin damage.
            My specialization in data analysis and statistical modeling has 
            enabled me to design innovative solutions for companies in a variety 
            of sectors, from finance to healthcare to e-commerce. I'm constantly 
            looking for new opportunities to apply my expertise in machine 
            learning, predictive analytics and artificial intelligence to 
            optimize your operations, increase your profitability and 
            stimulate your growth.
            </p>
            <a href="../../assets/CV.pdf" className="btn" >Download CV</a>
          </div>
          <div className="about__skills grid">

          {data.map((item, index) => (
            <div key={index} className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">{item.name}</h3> 
                <span className="skills__number">{item.number}</span> 
              </div>
              <div className="skills__bar">
                <span className={`skills__percentage ${getPercentageClass(item.percentage)}`}>
                </span> 
              </div>
            </div>
          ))}


          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  )
}

export default About