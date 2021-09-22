import React from "react";

import "./AboutMe.css";
import profileImage from "../../images/profile_image.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me section">
      <div className="about-me__container section__container">
        <h2 className="about-me__title section__title">Студент</h2>
        <div className="about-me__profile-container">
          <div>
            <p className="about-me__profile-name">Виталий</p>
            <p className="about-me__profile-job">
            Фронтенд-разработчик, 30 лет
            </p>
            <p className="about-me__profile-info">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about-me__profile-links">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="about-me__profile-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  className="about-me__profile-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            src={profileImage}
            alt="Фотография фронтенд-разработчика"
            className="about-me__profile-image"
          />
        </div>
        <Portfolio></Portfolio>
      </div>
    </section>
  );
}

export default AboutMe;
