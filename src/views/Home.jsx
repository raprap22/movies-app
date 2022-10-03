import React, { Component } from 'react';
import Result from '../components/Result';
import Filter from '../components/Filter';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-3 d-flex justify-content-center text-center">Search Your Movies</h1>
          <div className="">
            <Filter />
          </div>
        </div>
        <Result className="justify-content-center text-center" />
      </div>
    );
  }
}
export default App;
