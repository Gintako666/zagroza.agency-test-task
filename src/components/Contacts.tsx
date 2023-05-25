import React from 'react';
import { ContactsInput } from './ContactInput';

export const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <div className="container">
        <div className="contacts__content">
          <img
            src="./img/chat.png"
            alt=""
            className="contacts__img
          "
          />
          <h3 className="contacts__title title">
            Ainda tem dúvidas? Fale conosco!
          </h3>

          <div className="contacts__info">
            <p className="contacts__info__item">
              Ofereça um meio de comunicação direto.
              Pode ser um
              {' '}
              <a href="contato@email.com.br">contato@email.com.br</a>

            </p>
            <p className="contacts__info__item">
              {' '}
              Ou crie um formulário ao lado que entrem em
              contato
              {' '}
              <a href="123">o mais rápido possível!</a>

            </p>
            <a href="link" className="contacts__info__whatsapp">
              <img src="./img/whatsapp-icon.png" alt="" />
              Hey! Estamos no whatsapp!
            </a>
          </div>

          <div className="contacts__info">
            <ContactsInput
              name="Nome"
              placeholder="Nome Sobrenome"
            />
            <ContactsInput
              name="Email"
              placeholder="nome@email.com.br"
            />
            <ContactsInput
              name="Telefone"
              placeholder="21 9988-7766"
            />
            <button
              type="button"
              className="button contacts__info__button"
            >
              Enviar!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
