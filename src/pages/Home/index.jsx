import React from "react";

import logo from '../../assets/logo.svg';
import { Container, Search } from "./style";

const Home = () => 
    <Container>
        <Search>
            <img src={logo} alt= "Logo do Restaurante"/>
        </Search>
    </Container>

    export default Home;