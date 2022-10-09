import React, { useState } from "react";
import Search from "./Search";
import {
    Form,
    Row,
    Col,
} from 'react-bootstrap'


function Filter() {
    const [filter, setFilter] = useState();
    return (
        <Row >
            <Form.Control as="select" value={filter} onChange={i => setFilter(i.target.value)} className="w-auto mr-3">
                <option value="none">Pilih Filter</option>
                <option value="films">Movie</option>
                <option value="people">Character</option>
            </Form.Control>
            <Search filter={filter} />
        </Row>
    );
}

export default Filter;