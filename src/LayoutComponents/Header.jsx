import React from 'react';

let key = 0;

export const Header = ({ text }) => (
  <h2 id={key++} style={{ fontSize: '30px', padding: '0px', margin: '0px' }}>
    + {text}
  </h2>
);
