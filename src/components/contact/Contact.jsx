import React, { useState } from 'react';
import "./contact.css";
import { query } from './Inference';

function getPercentageClass(percentage) {
  if (percentage >= 80) {
    return 'high-percentage';
  } else if (percentage >= 50) {
    return 'medium-percentage'; 
  } else {
    return 'low-percentage';
  }
}

const Contact = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [inferenceResults, setInferenceResults] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    const message = formData.get('test');

    query({ "inputs": message }).then((response) => {
      console.log(JSON.stringify(response));
      setInferenceResults(response); 
      setSubmitted(true);
    });
    
    e.target.reset();
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Perform to confirm that I am the ideal candidate with AI</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">The feeling we have, despite its subjectivity, 
          can be a source of motivation.</h3>
          <p className="contact__details">
            Sentiment analysis, also known as opinion mining, is a natural language 
            processing (NLP) technique used to determine the sentiment or emotional 
            tone expressed in a piece of text. It involves classifying the text as 
            positive, negative, or neutral based on the emotions, opinions, or 
            attitudes conveyed by the words and phrases used. Sentiment analysis 
            has numerous applications, including social media monitoring, customer 
            feedback analysis, and market research, helping organizations gain 
            valuable insights from text data.
          </p>
        </div>

        {!isSubmitted && !inferenceResults ? (
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div contact__form-area">
              <textarea name="test" id="" cols="30" rows="10" required className="contact__form-input" placeholder='Type your test in english'>
              </textarea>
            </div>
            <button type="submit" className='btn'>Submit Test</button>
          </form>
        ) : null}

        {inferenceResults ? (
          <div className="contact__results">
            <h3 className="contact__title employe-title">Employability Results</h3>
            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles"> 
                  <p className="skills__name"> 
                    {parseFloat(inferenceResults[0][0].score.toFixed(2)) * 100}
                    % chances to hire me.
                  </p> 
                  <span className="skills__number">
                    {inferenceResults[0][0].label === 'positive'
                      ? 'positive 🥰' 
                      : inferenceResults[0][0].label === 'negative'
                      ? 'negative 😭' 
                      : inferenceResults[0][0].label === 'neutral'
                      ? 'neutral 😇' 
                      : ''}
                  </span>

                </div>
                <div className="skills__bar">
                  <span className={`skills__percentage ${getPercentageClass(inferenceResults[0][0].score * 100)}`}>
                  </span> 
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles"> 
                  <p className="skills__name"> 
                    {parseFloat(inferenceResults[0][1].score.toFixed(2)) * 100} 
                    % chances to hire me.</p> 
                  <span className="skills__number">
                    {inferenceResults[0][1].label === 'positive'
                      ? 'positive 🥰' 
                      : inferenceResults[0][1].label === 'negative'
                      ? 'negative 😭' 
                      : inferenceResults[0][1].label === 'neutral'
                      ? 'neutral 😇' 
                      : ''}
                  </span>
                </div>
                <div className="skills__bar">
                  <span className={`skills__percentage ${getPercentageClass(inferenceResults[0][1].score * 100)}`}>
                  </span> 
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles"> 
                  <p className="skills__name"> 
                    {parseFloat(inferenceResults[0][2].score.toFixed(2)) * 100} 
                    % chances to hire me.</p> 
                  <span className="skills__number">
                    {inferenceResults[0][2].label === 'positive'
                      ? 'positive 🥰' 
                      : inferenceResults[0][2].label === 'negative'
                      ? 'negative 😭' 
                      : inferenceResults[0][2].label === 'neutral'
                      ? 'neutral 😇' 
                      : ''}
                  </span>
                </div>
                <div className="skills__bar">
                  <span className={`skills__percentage ${getPercentageClass(inferenceResults[0][2].score * 100)}`}>
                  </span> 
                </div>
              </div>

            </div>
            <div className='skills__inference'> 
              <button className="btn" type="reset" onClick={() => window.location.reload()}>Resume</button>
            </div>
          </div>
          
        ) : null}
      </div>
    </section>
  );
}

export default Contact;
