import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

async function loadHats() {
  const response = await fetch("http://localhost:8090/api/hats/");
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    root.render(
      <React.StrictMode>
        <App hats={data} />
      </React.StrictMode>
    );
  } else {
    console.log(response);
  }
}
loadHats();