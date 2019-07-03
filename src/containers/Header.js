import React, { Component } from "react";
import styled from "styled-components";

import {
    Route,
    Link,
    NavLink
} from "react-router-dom";

import TopNav, {
    TopNavTitle,
    TopNavList,
    TopNavLink
} from 'calcite-react/TopNav';

import Avatar from 'calcite-react/Avatar';
import Michael from "../images/baseball.jpg";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Home from "./home";

const StyledTitle = styled(TopNavTitle)`
  color: white;
  font-size: 2em;
  text-decoration: none;
`;

const StyledNav = styled(TopNav)`
  background-color: green;
`
const StyledLink = styled(TopNavLink)`
    color: white;
    font-size: 1em;
    :hover{
        color: red;
        border-bottom-color: red;
        text-decoration: none;
    }
    text-decoration: none;
    padding-top: 0px;
    padding-left: 15px;
`

const StyledList = styled(TopNavList)`
    margin-left: 2em;
`

class Header extends Component {
    render() {
        return (
            <div>
                <StyledNav>
                    <Avatar src={Michael} style={{margin: '10px', width: 60, height: 60}} />
                    <StyledTitle as={Link} to="/">Michael Vetter</StyledTitle>
                    <StyledList>
                    <StyledLink as={NavLink} to="/resume">Resume</StyledLink>
                    <StyledLink as={NavLink} to="/portfolio">Portfolio</StyledLink>
                    <StyledLink href="https://mtvetter.github.io/contact.html">Contact</StyledLink>
                    </StyledList>
                </StyledNav>

                <Route exact path="/" component={Home} />;
                <Route path="/resume" component={Resume} />
                <Route path="/portfolio" component={Portfolio} />
            </div>
        )
    }
}

export default Header;