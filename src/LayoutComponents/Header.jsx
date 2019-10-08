import React from 'react';
import { Delete } from './elements.jsx';

let key = 0;

export const Header = ({ text, deleteHeader }) => (
  <h2 id={key++} style={{ fontSize: '30px', padding: '0px', margin: '0px' }}>
    + {text} <Delete onClick={() => deleteHeader(key)}>Delete</Delete>
  </h2>
);
