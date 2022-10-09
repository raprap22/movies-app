import React, { Component } from 'react';
import Result from '../components/Result';
import Filter from '../components/Filter';
import { Col, Row } from 'react-bootstrap';
import Search from '../components/Search';
// import App from '../App';

class App extends Component {
  render() {
    return (
      <div className='container mt-4'>
        <div className="jumbotron p-5 bg-white shadow text-center mx-auto" style={{ borderRadius: '20px' }}>
          <Row>
            <Col>
              <h1 style={{ fontFamily: 'Montserrat', fontSize: "35px" }}>Search Your Movies.</h1>
            </Col>
            <Col>
              <Filter />
            </Col>
          </Row>
        </div>
        {/* <div className="jumbotron bg-white shadow" style={{ borderRadius: '20px' }} > */}
          <Result/>
        {/* </div> */}
      </div>
    );
  }
}
console.log("data nih :", Search );
export default App;
