import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Hello, {formatName(user)}!</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }

// const user = null

// const element = (
//   getGreeting(user)
// )

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)

// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// )

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
