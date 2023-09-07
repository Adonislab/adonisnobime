import React from 'react';
import "./pricing.css";
import Image1 from "../../assets/02.jpg";


const Pricing = () => {
  return (
    <section className="pricing container section" id="pricing">
      <h2 className="section__title">Princing Plans</h2>

      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Basic</h3>
          <p className="pricing__title">
          A simple option but powerful
          to manage your business
          </p>
          <p className="pricing__support">Email Support</p>
          <h3 className="price">
            <em>$</em>25 <span>Hours</span>
          </h3>
          <a href="mailto:nobimetanguy19@gmail.com" className="btn">Get Started</a>
        </div>

        <div className="pricing__item best">
          <span className="badge">Recommanded</span>
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Premium</h3>
          <p className="pricing__title">
            Unlimited product including app
            integration and more features
          </p>
          <p className="pricing__support">Mon-Fri Support</p>
          <h3 className="price">
            <em>$</em>170 <span>Month</span>
          </h3>
          <a href="mailto:nobimetanguy19@gmail.com" className="btn">Get Started</a>
        </div>

        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Ultimate</h3>
          <p className="pricing__title">
            A wise option for large companies and individuals
          </p>
          <p className="pricing__support">24/7 Support</p>
          <h3 className="price">
            <em>$</em> 35000<span> Year</span>
          </h3>
          <a href="mailto:nobimetanguy19@gmail.com" className="btn">Get Started</a>
        </div>

      </div>
    </section>
  )
}

export default Pricing