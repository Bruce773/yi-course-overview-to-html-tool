import React from 'react';

let key = 0;

export const Section = ({ text }) => (
  <p id={key++} style={{ fontSize: '20px' }}>
    {text}
  </p>
);
