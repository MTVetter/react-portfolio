import React, { Component } from "react";
import Container from "react-bootstrap/Container";

class Contact extends Component{
    render() {
        return (
            <Container>
                <h2>Feel free to contact me:</h2>
                <br />
                <h4>Email: <a href="mailto:mtvetterla@gmail.com" target="_blank">mtvetterla@gmail.com</a></h4>
                <h4>Github: <a href="https://github.com/MTVetter">MTVetter</a></h4>
            </Container>
        )
    }
}

export default Contact;