import React from 'react';
import Container from "react-bootstrap/Container";
import SearchDrinks from './SearchDrinks';
import NavBar from './NavBar'

const Menulist = () => {
    return (
    <>
        <NavBar />
        <Container>
            <SearchDrinks />
        </Container>
    </>
    );
};
export default Menulist;
