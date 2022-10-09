import React, { Component } from 'react';
import Detail from '../views/Detail';
import Home from '../views/Home';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:lastword' element={<Detail />} />
        </Routes>
      </div>
    );
  }
}
export default App;
