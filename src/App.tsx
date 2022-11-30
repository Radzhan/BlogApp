import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Add from './containers/Add/Add';
import Contacts from './containers/Contacts/Contacts';
import Home from './containers/Home/Home';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <div className="App">

        <Routes>
          <Route path="/" element={(
            <Home />
          )} />

          <Route path="/about" element={(
            <About />
          )} />

          <Route path="/add" element={(
            <Add />
          )} />

          <Route path="/contacts" element={(
            <Contacts />
          )} />
        </Routes>
      </div></>
  );
}

export default App;
