import React, { Component } from 'react'
import {
    Card,
    Row
} from 'react-bootstrap'
import { connect } from 'react-redux';

class ContentDetail extends Component {
    render() {
        return (
            <Row>
                <Card border='light' className="bg-dark text-dark">
                    <Card.Img src="https://via.placeholder.com/2160x700" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>{this.props.movies}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Row>
        )
    }
}


function mapProps(state) {
    console.log("detail2", state);
}

export default connect(mapProps, null)(ContentDetail)