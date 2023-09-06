import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">156</h3>
                <span className="about__subtitle">Project completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">180</h3>
                <span className="about__subtitle">Cup of coffee</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-badge"></i>
            <div>
                <h3 className="about__title">188</h3>
                <span className="about__subtitle">Nominees Winner</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">224</h3>
                <span className="about__subtitle">Satisfed Clients</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox