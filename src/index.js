import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import Container from './components/container';
import SecondCounterContainer from './components/second-counter-container';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  /*<React.StrictMode>*/
    <SecondCounterContainer />
  /*</React.StrictMode>,*/
);/*react.StrictMode causes counter to double click
remove it, and the counter only clicks one at a time*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*Events: The actions a user takes triggers an event that will 
read or change the data that our app is displaying. 
The ways JSX tells an element to respond to events is similar 
to html */

