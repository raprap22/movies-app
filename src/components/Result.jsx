import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Item from './Item';

class Result extends Component {
    render() {
        var movies = this.props.movies;
        console.log("movies :", movies);
        if (movies.length > 0) {
            return (
                <div className="jumbotron bg-white shadow mx-auto" style={{ borderRadius: '20px', width: 'fit-content'}} >
                    <Row>
                        {
                            this.props.movies.map((item) => {
                                console.log("id");
                                return <Item key={item.id} item={item} />
                            })
                        }
                    </Row>
                </div>
            );
        } else {
            return (
                <div hidden></div>
            );
        }
    }
}

function mapStateToProps(state) {
    console.log("State: ", state);
    return {
        movies: state.movies
    };
}
export default connect(mapStateToProps, null)(Result);
