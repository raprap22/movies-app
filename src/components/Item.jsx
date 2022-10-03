import React from 'react'
import {
    Card,
    Badge
} from 'react-bootstrap'


class Item extends React.Component {
    render() {
        var str = this.props.item.url;
        var lastStr = str.lastIndexOf("/");

        str = str.substring(0, lastStr);
        var lastWord = str.split("/").pop()
        console.log("id :", lastWord);
        return (
            <Card style={{ width: '18rem', margin: '20px' }} className="mx-auto">
                <Card.Img variant='top' src='https://via.placeholder.com/150' />
                <Card.Body>
                    <Card.Title>
                        {this.props.item.title || this.props.item.name} <hr />

                    </Card.Title>
                    <label>{this.props.item.release_date != null ? "Release Date:" : "Years Old:"} <Badge pill bg="secondary" text="light">{this.props.item.release_date || this.props.item.birth_year}</Badge></label><br />
                    <label>{this.props.item.producer != null ? "Producer:" : "Height:"} <Badge bg="dark" text="light">{this.props.item.producer || this.props.item.height}</Badge></label>
                    <Card.Text>
                        <label>{this.props.item.opening_crawl == null ? "Gender:" : ""} {this.props.item.opening_crawl || this.props.item.gender}</label>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default Item