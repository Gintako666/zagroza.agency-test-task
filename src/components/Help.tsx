import React from 'react';

export const Help = () => {
  return (
    <div className="container">
      <section className="help" id="help">
        <a href="123" className="help__hashtag">#contecomagente</a>
        <h2 className="help__title">Simples, rápido e do seu jeito.</h2>
        <p className="help__subtitle">
          Mostre os valores da sua marca e como ela pode fazer
          parte da vida do usuário que está lendo. Gerar
          identificação é a chave para
          {' '}
          <a href="123" className="help__subtitle__link">
            conquistar seu cliente.
          </a>
        </p>
        <button
          type="button"
          className="button help__button help__button--yellow"
        >
          Eu quero!
        </button>
        <div className="help__img-container">
          <img src="./img/Man talking on phone.png" alt="" />
          <img
            src="./img/help-shape-1.png"
            alt=""
            className="help__img-container__shape-1"
          />
          <img
            src="./img/Burger Shape-2.png"
            alt=""
            className="help__img-container__shape-2"
          />
          <img
            src="./img/Burger Shape.png"
            alt=""
            className="help__img-container__shape-3"
          />
          <img
            src="./img/Burger Shape.png"
            alt=""
            className="help__img-container__shape-4"
          />
          <div className="help__img-container__blur"></div>
        </div>
      </section>
    </div>
  );
};
