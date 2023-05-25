import React from 'react';

type Props = {
  img: string,
  title: string,
  text: string,
};

export const AboutCard: React.FC<Props> = (
  { img, text, title },
) => {
  return (
    <div className="about__card">
      <img src={img} alt="" className="about__card__img" />
      <h4 className="about__card__title">{title}</h4>
      <p className="about__card__text">{text}</p>
    </div>
  );
};
