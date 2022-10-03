import React, { Component } from 'react';
import Home from '../views/Home';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    );
  }
}
export default App;
