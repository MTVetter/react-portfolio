import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './containers/Header';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Home from "./containers/home";
import Contact from "./containers/contact";

import TopNav, {
  TopNavTitle,
  TopNavList,
  TopNavLink
} from 'calcite-react/TopNav';
import Avatar from 'calcite-react/Avatar';
import Michael from "./images/baseball.jpg";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";


const AppDiv = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

const ContainerDiv = styled.div`
  flex: 1;
  margin: 1% 17% 3% 17%;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav>
          <Avatar src={Michael} style={{margin: '10px', width: 60, height: 60}} />
          <TopNavTitle as={Link} to="/">Michael Vetter</TopNavTitle>
          <TopNavList>
            <TopNavLink as={NavLink} to="/resume">Resume</TopNavLink>
            <TopNavLink as={NavLink} to="/portfolio">Portfolio</TopNavLink>
            <TopNavLink as={NavLink} to="/contact">Contact</TopNavLink>
          </TopNavList>
        </TopNav>
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    )
  }
}

export default App;
