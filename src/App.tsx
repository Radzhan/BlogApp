import React from 'react';
import { Route, Routes } from "react-router-dom";
import ReadMore from './components/ReadMore/ReadMore';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Add from './containers/Add/Add';
import Contacts from './containers/Contacts/Contacts';
import Home from './containers/Home/Home';
import Edit from './components/Edit/Edit';

function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={(
            <Home />
          )} >

            <Route path='/read/:id' element={(
              <ReadMore />
            )} />

            <Route path='/edit-post/:id' element={(
              <Edit/>
            )}/>

          </Route>

          <Route path="/new-post" element={(
            <Add />
          )} />

          <Route path="/about" element={(
            <About />
          )} />

          <Route path="/contacts" element={(
            <Contacts />
          )} />

          <Route path='*' element={(<h1>Not Found</h1>)} />
        </Routes>
      </div></>
  );
}

export default App;
