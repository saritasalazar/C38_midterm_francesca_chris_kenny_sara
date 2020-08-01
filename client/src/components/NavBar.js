import React from "react";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
    return(
        <Nav style={{ backgroundColor: "tomato" }} defaultActiveKey="/home" as="ul">
            <Nav.Item as ="li">
                <Nav.Link style={{ color: "#fff" }} href="/random">
                    <strong>Drink of the Day</strong>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as ="li">
                <Nav.Link style={{ color: "#fff" }} href="/about">
                    <strong>About Us</strong>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;