import React, { useState } from "react";
import Search from "./Search";
import {
    Form,
    Row,
    Col,
} from 'react-bootstrap'

// 

function Filter() {
    const [filter, setFilter] = useState();
    return (
        <div >
            <Row >
                <Col >
                    <Form.Control as="select" value={filter} onChange={i => setFilter(i.target.value)} className="w-auto mx-auto">
                        <option value="none">Pilih Filter</option>
                        <option value="films">Movie</option>
                        <option value="people">Character</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row>
                <Search filter={filter} />
            </Row>
        </div>
    );
}

export default Filter;