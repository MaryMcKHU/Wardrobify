import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatList from './HatList';
import HatForm from './HatForm';
import React from 'react';

function App(props) {
  if (props.hats === undefined) {
    return null
  }
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="home" element={<MainPage />} />
            <Route index element={<MainPage />} />
          <Route path="hats" element={<HatList data={props}/>} />
          <Route path="hats">
            <Route path="new" element={<HatForm />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
