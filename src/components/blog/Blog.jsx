import React from 'react';
import "./blog.css";
import Image1 from '../../assets/blog.jpg';

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href='https://www.linkedin.com/in/tanguy-adonis-nobime-078166200/recent-activity/all/' target='_blank'><span className="blog__category">Machine Learning</span> </a>
            <a href='https://www.linkedin.com/in/tanguy-adonis-nobime-078166200/recent-activity/all/' target='_blank'><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <p className="blog__title">
              Machine learning as a concept has been around for 
              quite some time. The term “machine learning” was coined by Arthur Samuel, a 
              computer scientist at IBM and a pioneer in AI and computer gaming.
            </p>
            <div className="blog__meta">
              <span>Actual</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href='https://www.linkedin.com/in/tanguy-adonis-nobime-078166200/recent-activity/all/' target='_blank'><span className="blog__category">Robotic</span> </a>
            <a href='https://www.linkedin.com/in/tanguy-adonis-nobime-078166200/recent-activity/all/' target='_blank'><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <p className="blog__title">
            Robotic and AI applications are revolutionizing industries by enabling
            autonomous machines to perform tasks ranging from precision manufacturing 
            and logistics optimization to healthcare assistance and even space 
            exploration.
            </p>
            <div className="blog__meta">
              <span>Actual</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href='https://www.linkedin.com/in/tanguy-adonis-nobime-078166200/recent-activity/all/' target='_blank'><span className="blog__category">Developpement</span> </a>
            <a href='https://www.linkedin.com/in/tanguy-adonis-nobime-078166200/recent-activity/all/' target='_blank'><img src={Image1} alt="" className="blog__img" /></a>
          </div>
          <div className="blog__details">
            <p className="blog__title">
              Python is a versatile and widely-used programming 
              language known for its simplicity and readability. It's a top choice for web 
              development, data analysis, machine learning, and automation, making it an 
              ideal language for a wide range of software development projects.
            </p>
            <div className="blog__meta">
              <span>Actual</span>
              <span className="blog__dot">.</span>
              <span>Bolby</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog