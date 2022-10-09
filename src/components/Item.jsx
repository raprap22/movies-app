import React from 'react'
import {
    Card,
    Button,
    Badge
} from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Item extends React.Component {
    render() {
        var str = this.props.item.url;
        var lastStr = str.lastIndexOf("/");

        str = str.substring(0, lastStr);
        var lastWord = str.split("/").pop()
        var category = this.props.item.title != null ? "films" : "people";
        var data = {
            id: lastWord,
            category: category
        }
        console.log("data nih :", data );
        return (
            
            <Card style={{ width: '18rem', margin: '20px', borderRadius: '20px'}} className="mx-auto">
                <Card.Img variant='top' src='https://via.placeholder.com/150' style={{borderRadius: '20px'}}/>
                <Card.Body>
                    <Card.Title>
                        {this.props.item.title || this.props.item.name} <hr />

                    </Card.Title>
                    <label>{this.props.item.release_date != null ? "Release Date:" : "Years Old:"} <Badge pill bg="secondary" text="light">{this.props.item.release_date || this.props.item.birth_year}</Badge></label><br />
                    <label>{this.props.item.producer != null ? "Producer:" : "Height:"} <Badge bg="dark" text="light">{this.props.item.producer || this.props.item.height}</Badge></label>
                    <Card.Text>
                        <label>{this.props.item.opening_crawl == null ? "Gender:" : ""} {this.props.item.opening_crawl || this.props.item.gender}</label>
                    </Card.Text>
                    <Link to={`/detail/${lastWord}`} state={data}>
                    <Button variant="success">{this.props.item.title != null ? "Explore This Film !!" : "Check This Character"}</Button>
                    </Link >
                </Card.Body>
            </Card>
        )
    }
}

export default Item