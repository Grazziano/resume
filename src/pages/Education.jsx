import React from 'react';

export default function Education() {
  return (
    <section className="resume-section" id="education">
      <div className="resume-section-content">
        <h2 className="mb-5">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Faculdade de Tecnologia SENAC RS</h3>
            <div className="subheading mb-3">
              Tecnologo em Analise e desenvolvimento de Sistemas
            </div>
            <div>Analise e desenvolvimento de sistemas</div>
            {/* <p>GPA: 3.23</p> */}
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">2017 - 2019</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0">Trybe</h3>
            <div className="subheading mb-3">
              Curso livre Desenvolvimento Web
            </div>
            {/* <p>GPA: 3.56</p> */}
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2021 - August 2022</span>
          </div>
        </div>
      </div>
    </section>
  );
}
