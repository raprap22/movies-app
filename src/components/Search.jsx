import React, { Component } from 'react'
import {
    FormGroup,
    FormControl,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import { movies } from '../actions'
import { connect } from 'react-redux'
import swal from 'sweetalert';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
        };
    }

    search() {
        const notNull = this.state.query !== '' && this.props.filter !== 'none';
        if (notNull) {
            let url = "https://swapi.dev/api/" + this.props.filter + "/?search=" + this.state.query;
            fetch(url, {
                method: 'GET'
            })
                .then(response => response.json())
                .then((jsonObj) => {
                    this.props.movies(jsonObj.results);
                });
        } else {
            swal("Kesalahan!", "Silahkan masukkan kata kunci dan filter pencarian!", "warning");
        }

    }

    render() {
        return (
            <FormGroup className="mx-auto p-3" >
                <Row>
                    <Col>
                        <FormControl type="text" className="form-control mr-sm-2 w-auto" placeholder="Search" onChange={(event) => this.setState({ query: event.target.value })} />{" "}
                    </Col>
                    <Col>
                        <Button bsstyle="success" onClick={() => this.search()} className="w-100">Search</Button>
                    </Col>
                </Row>
            </FormGroup>
        )
    }
}

export default connect(null, { movies })(Search)
