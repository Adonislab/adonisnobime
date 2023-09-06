import React from 'react';

const Card = (props) => {
  return (
    <div className="timeline__item">
      {props.icon === 'icon-graduation' ? (
        <h3 className="timeline__title">University</h3>
      ) : (
        <h3 className="timeline__title">Supplementary</h3>
      )}
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__text">{props.desc}</p>
    </div>
  );
}

export default Card;
