import React from 'react';

let key = 0;

const Header = (props) => (
  <h2 id={key++} style={{ fontSize: '30px' }}>
    {props.text}
  </h2>
);

export default Header;
