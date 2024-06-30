import React from 'react';

const Section = ({ id, title, active, children }) => (
  <section id={id} className={active ? 'active' : ''}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
