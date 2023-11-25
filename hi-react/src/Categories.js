import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

//react companent class
export default class Categories extends Component {
    render() {
        return (
            <div>
                <h3>Conteiner of React companent class from Categories</h3>
                <ListGroup>
                    <ListGroupItem
                        disabled
                        href="#"
                        tag="a"
                    >
                        Cras justo odio
                    </ListGroupItem>
                    <ListGroupItem
                        href="#"
                        tag="a"
                    >
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem
                        href="#"
                        tag="a"
                    >
                        Morbi leo risus
                    </ListGroupItem>
                    <ListGroupItem
                        href="#"
                        tag="a"
                    >
                        Porta ac consectetur ac
                    </ListGroupItem>
                    <ListGroupItem
                        href="#"
                        tag="a"
                    >
                        Vestibulum at eros
                    </ListGroupItem>
                </ListGroup>
            </div>
        );
    }
}
