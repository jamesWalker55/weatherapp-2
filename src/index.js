import React from 'react';
import ReactDOM from 'react-dom';
import './nuke.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
 * Read more about the design decisions behind the app at README.md
 */

ReactDOM.render(
  <React.StrictMode>
    {/* don't use test data for the app (test data at `src/data/temp-api-data.json`) */}
    <App useTestData={false} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
