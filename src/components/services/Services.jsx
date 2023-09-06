import React from 'react';
import "./services.css";
import Image1 from "../../assets/01.jpg";
import Image2 from "../../assets/02.jpg";

const data = [
    {
      "id":0,
      "image":Image1,
      "title":"Data scientist at Aquapro like Freelance",
      "link":"https://cvdesignr.com/fr/",
      "description":"I'm more in charge of training in data science and the development of Android and Web applications.I primarily focus on data science training and the development of Android and web applications in my role."
    },
    {
      "id":1,
      "image":Image2,
      "title":"Maintenance technician",
      "link":"https://cvdesignr.com/fr/",
      "description":"I did maintenance work at the cerco institute, which gave me a better understanding of computer architecture.I gained valuable experience in computer architecture through my maintenance work at the Cerco Institute, which deepened my understanding of this field."
    },
    {
      "id":2,
      "image":Image1,
      "title":"Artificial Intelligence Facilitator",
      "link":"https://cvdesignr.com/fr/",
      "description":"As a team of developers and former attendees of the Summer School on Artificial Intelligence, we mentored participants in constructing two NLP models: one for text autocompletion using a pre-trained GPT-2 model, and the other for generating images from text with a pre-trained model. "
    },
]

const Services = () => {
  return (
    <section className="services container section " id='services'>
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map((item) => (
          <div className="services__card" key={item.id}>
            <img src={item.image} alt="" className="services__img" />
            <h3 className="services__title">{item.title}</h3>
            <p className="services__description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services;
