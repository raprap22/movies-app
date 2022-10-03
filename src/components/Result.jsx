import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Item from './Item';

class Result extends Component {
    render() {
        return (
            <Row>
                {
                    this.props.movies.map((item) => {
                        console.log("id");
                        return <Item key={item.id} item={item} />
                    })
                }
            </Row>
        );
    }
}

function mapStateToProps(state) {
    console.log("State: ", state);
    return {
        movies: state.movies
    };
}
export default connect(mapStateToProps, null)(Result);
