import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import HatList from './HatList';
import HatForm from './HatForm';
import ShoeForm from './ShoeForm';
import ShoeList from './ShoeList';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      hats: [],
      shoes: [],
    };
    this.loadHats = this.loadHats.bind(this);
    this.loadShoes = this.loadShoes.bind(this);
    this.deleteShoe = this.deleteShoe.bind(this);
  }

  async componentDidMount() {
    this.loadHats()
    this.loadShoes()
  }

  async loadHats() {
    const response = await fetch("http://localhost:8090/api/hats");
    if(response.ok) {
      const data = await response.json();
      this.setState({hats: data.hats});
    }
  }

  async loadShoes() {
    const response = await fetch("http://localhost:8080/api/shoes");
    if(response.ok) {
      const data = await response.json();
      this.setState({shoes: data.shoes});
    }
  }

  async deleteShoe (shoe) {
    if (window.confirm("Are you sure you want to delete this?")) {
      const shoeUrl = `http://localhost:8080/api/shoes/${shoe.id}/`
      const fetchConfig = {
        method: 'delete',
      }
    const response = await fetch(shoeUrl, fetchConfig);
    if (response.ok) {
      const newShoes = this.state.shoes.filter((sh) => shoe.id != sh.id)
      this.setState({shoes: newShoes})
    }
    }
  }

  render() {
    return(
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="home" element={<MainPage />} />
            <Route index element={<MainPage />} />
          <Route path="hats" element={<HatList hats={this.state.hats}/>} />
          <Route path="hats">
            <Route path="new" element={<HatForm hats={this.state.hats}/>} />
          </Route>
          <Route path="shoes" element={<ShoeList shoes={this.state.shoes} delete={this.deleteShoe}/>} />
          <Route path="shoes">
            <Route path="new" element={<ShoeForm shoes={this.state.shoes}/>} />
          </Route>
        </Routes>
    </BrowserRouter>
    );
  }
}

export default App;