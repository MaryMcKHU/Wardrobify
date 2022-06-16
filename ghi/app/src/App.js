import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ShoeForm from './ShoeForm';
import ShoeList from './ShoeList';
import React from 'react';
import { useState } from 'react';

// async function loadShoes() {
//   const response = await fetch("http://localhost:8080/api/shoes/");
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App shoes={data.shoes} />
//       </React.StrictMode>
//     );
//   } else {
//     console.log(response);
//   }
// }
// loadShoes();

function App(props) {
  // const [ShoeList, setShoeList] = useState('')
  if (props.shoes === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="home" element={<MainPage />} />
            <Route index element={<MainPage />} />
          <Route path="shoes" element={<ShoeList data={props}/>} />
          <Route path="shoes">
            <Route path="new" element={<ShoeForm />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
