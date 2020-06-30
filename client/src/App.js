import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Search from './pages/Search.js';
import Saved from './pages/Saved.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path={['/', '/search']}>
          <Search />
        </Route>
        <Route exact path='/saved'>
          <Saved />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
