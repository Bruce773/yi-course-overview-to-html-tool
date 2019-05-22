import React from 'react';

let key = 0;

const Section = ({ text }) => (
  <p id={key++} style={{ fontSize: '20px' }}>
    {text}
  </p>
);

export default Section;
