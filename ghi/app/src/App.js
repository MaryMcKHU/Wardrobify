import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoeForm from './ShoeForm';
import ShoeList from './ShoeList';
import React from 'react';

function App() {
  if (props.shoes === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="shoes" element={<ShoeList />} />
        </Routes>
        <Routes>
          <Route path="shoes">
            <Route path="new" element={<ShoeForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
