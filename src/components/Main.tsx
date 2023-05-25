/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';

export const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__content">
          <h1 className="main__title">Um slogan chamativo aqui.</h1>
          <h4 className="main__sub-title">
            Um texto sobre o seu produto ou serviço.
            Explique
            {' '}
            <a href="df" className="main__sub-title__link">
              porque ele é valioso
            </a>
            {' '}
            e direcione o
            usuário ao próximo objetivo.

          </h4>
          <button
            type="button"
            className="button main__button main__button--yellow"
          >
            Eu quero!

          </button>
          <button
            type="button"
            className="button main__button main__button--transparent"
          >
            Conhecer mais

          </button>

          <div className="main__img-container">
            <img
              src="./img/Businessman.png"
              alt=""
              className="main__img-container__businessman"
            />
            <img
              src="./img/shape.png"
              alt=""
              className="main__img-container__shape"
            />
            <div className="main__img-container__blur"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
