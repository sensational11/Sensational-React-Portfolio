import React from 'react'; //because of webpack you can say "import" instead of require
import ReactDOM from 'react-dom/client'; //import virtal dom
import './index.css'; //import css
import App from './App'; //import app.js
import reportWebVitals from './reportWebVitals';
//index.js is where you import the virtual dom
//targeting the root id from the HTML file
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App /> //
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
