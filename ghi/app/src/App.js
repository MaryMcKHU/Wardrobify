import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatList from './HatList';
import HatForm from './HatForm';
import ShoeForm from './ShoeForm';
import ShoeList from './ShoeList';
import DeleteShoe from './DeleteShoe';
import React from 'react';


function App(props) {
  if (props.shoes === undefined) {
    return null;
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
          <Route path="shoes" element={<ShoeList data={props}/>} />
          <Route path="shoes">
            <Route path="new" element={<ShoeForm />} />
          </Route>
          <Route path="shoes">
            <Route path="delete" element={<DeleteShoe />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
