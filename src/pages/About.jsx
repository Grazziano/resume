import React from 'react';

export default function About() {
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Grazziano
          <span className="text-primary">Fagundes</span>
        </h1>
        <div className="subheading mb-5">
          Pelotas · Rio Grande do Sul · Brasil ·
          <a href="mailto:grazzianofagundes@gmail.com">
            grazzianofagundes@gmail.com
          </a>
        </div>
        <p className="lead mb-5">
          Olá, eu sou o Grazziano. Eu tenho 33 anos, sou analista de sistemas.
          Sou brasileiro, nasci em Pelotas - RS, onde vivo atualmente. Minha
          história com programação começou em 2017, quando entrei no
          FATEC-SENAC-RS (Faculdade de Tecnologia SENAC de Pelotas - RS), onde
          me formei em 2019. Já em fevereiro de 2018 comecei como estagiário no
          COINPEL (Companhia de Informática de Pelotas), onde fiquei até
          fevereiro de 2021, dentre as ferramentas que utilizava estavam a
          linguagem PHP, o framework Laravel e o banco de dados Postgresql. Em
          Agosto de 2021 entrei para Trybe.
        </p>
        <div className="social-icons">
          <a
            className="social-icon"
            target="_blank"
            href="https://www.linkedin.com/in/grazziano-fagundes/"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://github.com/Grazziano"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://www.instagram.com/grazzianoborgesfagundes/"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            className="social-icon"
            target="_blank"
            href="https://www.facebook.com/grazziano.borgesfagundes/"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
