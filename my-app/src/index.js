import ReactDOM from 'react-dom';
import React from 'react';

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );

  ReactDOM.render(
  element,
  eocument.getElementById('a')
);
