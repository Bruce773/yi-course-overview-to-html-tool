import React from 'react';

let key = 0;

const Section = (props) => (
  <p id={key++} style={{ fontSize: '20px' }}>
    {props.text}
  </p>
);

export default Section;
