import React from 'react';
import About from '../pages/About';
import Contact from '../pages/Contact';
// import Awards from '../pages/Awards';
import Education from '../pages/Education';
// import Experience from '../pages/Experience';
import Interests from '../pages/Interests';
import Skills from '../pages/Skills';

export default function Body() {
  return (
    <div className="container-fluid p-0">
      {/* About */}
      <About />
      <hr className="m-0" />
      {/* Experience */}
      {/* <Experience /> */}
      <hr className="m-0" />
      {/* Education */}
      <Education />
      <hr className="m-0" />
      {/* Skills */}
      <Skills />
      <hr className="m-0" />
      {/* Interests */}
      <Interests />
      <hr className="m-0" />
      {/* Awards */}
      {/* <Awards /> */}
      <Contact />
    </div>
  );
}
