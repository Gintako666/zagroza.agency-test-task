import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { AboutCard } from './AboutCard';
import { useWindowSizes } from '../hooks/use-windowSize';

export const About = () => {
  const [windowWifth] = useWindowSizes();

  return (
    <div className="container">
      <section className="about" id="about">
        <h3 className="about__title title">
          Um subtítulo para quem rolou até aqui!
        </h3>
        <p className="about__subtitle">
          Aproveite esta seção para destacar os benefícios
          do seu produto ou serviço. Palavras-chave ajudam no SEO.
        </p>

        <Swiper
          spaceBetween={50}
          slidesPerView={windowWifth > 1110 ? 3 : 1}
        >
          <SwiperSlide>
            <AboutCard
              img="./img/about-img-1.png"
              title="Rápido"
              text="Aproveite esta seção para destacar
               os benefícios do seu produto ou serviço."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutCard
              img="./img/about-img-2.png"
              title="Rápido"
              text="Aproveite esta seção para destacar
               os benefícios do seu produto ou serviço."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutCard
              img="./img/about-img-3.png"
              title="Rápido"
              text="Aproveite esta seção para destacar
               os benefícios do seu produto ou serviço."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutCard
              img="./img/about-img-1.png"
              title="Rápido"
              text="Aproveite esta seção para destacar
               os benefícios do seu produto ou serviço."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutCard
              img="./img/about-img-2.png"
              title="Rápido"
              text="Aproveite esta seção para destacar
               os benefícios do seu produto ou serviço."
            />
          </SwiperSlide>
          <SwiperSlide>
            <AboutCard
              img="./img/about-img-3.png"
              title="Rápido"
              text="Aproveite esta seção para destacar
               os benefícios do seu produto ou serviço."
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};
