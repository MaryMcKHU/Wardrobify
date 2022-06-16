import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


async function loadShoes() {
  const response = await fetch("http://localhost:8080/api/shoes/");
  if (response.ok) {
    const data = await response.json();
    root.render(
      <React.StrictMode>
        <App shoes={data.shoes} />
      </React.StrictMode>
    );
  } else {
    console.log(response);
  }
}
loadShoes();
