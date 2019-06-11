import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

import styled from 'styled-components';

//Images for the thumbnails
import Baseball from "../images/exploreBaseballStadiums.PNG";
import Veterans from "../images/veterans.PNG";
import Chase from "../images/chaseDeposits.PNG";
import Bike from "../images/bikeroute.png";
import Hurricane from "../images/HurricanePreparedness-thumbnail.png";
import Projects from "../images/projectSystems.PNG";
import BHR from "../images/BHR.PNG";
import Restaurants from "../images/restaurants.PNG";


const StyledHR = styled.hr`
    border: 1px solid gray;
`

class Portfolio extends Component{
    render() {
        return(
            <Container>
                <h1>Portfolio</h1>
                <br/>
                <Row>
                    <Col className="font">
                        <h4>Restaurants Interactive Map</h4>
                        <Image src={Restaurants} fluid />
                        <p><b>Tools Used:</b> ArcGIS for JavaScript</p>
                        <p>My wife and I have a hard time remembering the different restaurants that we want to try around Houston. So I created this interactive application.
                            The application contains the different restaurants that we said we wanted to visit. The restaurants are represented by a point. The point is colored
                            based on whether we have already eaten at the restaurant. If a user clicks on the point, a popup window will appear that has a brief description of
                            the restaurant along with the restaurant's website. The popup also has two custom actions. The first custom action gives the user directions from
                            their current location to the restaurant. The second custom action displays the menu for the restaurant.
                        </p>
                        <Button variant="outline-primary" size="lg" href="https://mtvetter.github.io/Restaurants" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>Basin Highlight Report Interactive Map</h4>
                        <Image src={BHR} fluid />
                        <p><b>Tools Used:</b> ArcGIS for JavaScript</p>
                        <p>Each watershed contains river, creeks, or lakes that flow within their boundaries. When a user clicks on the map, the watersheds will be filtered
                            to show only the watershed that contains the user's mouse click. A popup box will display to show the major tributaries, areas of concern, and
                            plans of the selected watershed. The plans section of the popup contains links to the plans associated with the watershed. There are also links
                            to another interactive web application and a PDF showing a quick summary of the water quality of the watershed.
                        </p>
                        <Button variant="outline-primary" size="lg" href="https://datalabs.h-gac.com/development/BHR_app" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>Explore Baseball Stadiums</h4>
                        <Image src={Baseball} fluid />
                        <p><b>Tools Used:</b> jQuery, Leaflet, D3, geoJSON</p>
                        <p>Each stadium has some basic facts about the stadium like when the stadium was built and the home team of the stadium. Other facts come from the
                            2016 MLB season. These facts include average attendance, average time of game, anad average ticket price. Below the facts is a graph that displays
                            every team's winning percentage at the stadium. The application also has searching functionality and a home button to get back to the initial
                            extent.
                        </p>
                        <Button variant="outline-primary" size="lg" href="https://mtvetter.github.io/ExploreBaseballStadiums" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>Veterans Across America</h4>
                        <Image src={Veterans} fluid />
                        <p><b>Tools Used:</b> jQuery, D3</p>
                        <p>Each state has its veteran data displayed using D3. This was my first time using D3 so I was impressed with what the package can do. The initial
                            display shows the percentage of population per state that are veterans. There is a dropdown option so that users can change the data. The bar graph
                            is connected to the map so that when a user hovers over a bar the corresponding state is highlighted and vice versa.
                        </p>
                        <Button variant="outline-primary" size="lg" href="https://mtvetter.github.io/VeteransAcrossAmerica" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>Chase Deposits Over Time</h4>
                        <Image src={Chase} fluid />
                        <p><b>Tools Used:</b> jQuery, Leaflet, geoJSON</p>
                        <p>Every Chase bank keeps a tally of the number of deposits that each branch recieves every year. I took seven years worth of deposits and displayed
                            the deposits by cities. I chose 21 cities to display the number of deposits. As the user clicks through the years, the points either grow or
                            shrink based on the total number of deposits.
                        </p>
                        <Button variant="outline-primary" size="lg" href="https://mtvetter.github.io/ChaseDeposits" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>Southern Africa Bike Route</h4>
                        <Image src={Bike} fluid />
                        <p><b>Tools Used:</b> Photoshop, Illustrator, ArcMap</p>
                        <p>This map depicts a fictitious route for an international cycling competition. Photoshop was used to accentuate the shaded relief in the background.
                            Illustrator was used to place the labels, graph, and scale bar.
                        </p>
                        <Button variant="outline-warning" size="lg" href="https://mtvetter.github.io/assets/bikeroute.png" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>Hurricane Preparedness</h4>
                        <Image src={Hurricane} fluid />
                        <p><b>Tools Used:</b> Illustrator, ArcMap</p>
                        <p>Growing up in Louisiana, hurricanes were always something that might occur during the summer. I created this infographic to show the states that
                            have the highest potential of being hit by a hurricane. Along with showing the chances of being hit by a hurricane, the infographic also has
                            some tips for people to be prepared in case a hurricane does hit their area.
                        </p>
                        <Button variant="outline-warning" size="lg" href="https://mtvetter.github.io/assets/MVetter_LongformInfographic.png" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                <Row>
                    <Col className="font">
                        <h4>DOTD Projects</h4>
                        <Image src={Projects} fluid />
                        <p><b>Tools Used:</b> ArcGIS for JavaScript API, ESRI Linear Referencing API, ESRI REST API, jQuery, jQuery UI</p>
                        <p>Inputting new projects for road construction was an archaic procedure where the user never had to look at a map. This causes problems since the user
                            thinks they entered information in correctly only to find out later the project wasn't located in the correct location. The application allows the
                            user to draw the project on the map and the information will be automatically populated for them. If something doesn't look correct, the user can
                            change any of the values and these values will be kept when the user hits the submit button.
                        </p>
                        <Button variant="outline-primary" size="lg" href="https://mtvetter.github.io/ProjectSystems" target="_blank">Take a Look!</Button>
                    </Col>
                </Row>
                <StyledHR />
                {/* <Row>
                    <Col sm={4}>
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Baseball} />
                            <Card.Body>
                                <Card.Title>Explore Baseball Stadiums</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/ExploreBaseballStadiums" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Veterans} />
                            <Card.Body>
                                <Card.Title>Veterans Across America</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/VeteransAcrossAmerica/" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Chase} />
                            <Card.Body>
                                <Card.Title>Chase Deposits</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/ChaseDeposits/" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={4}>
                        <Card border="warning" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Bike} />
                            <Card.Body>
                                <Card.Title>Southern Africa Bike Route</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/assets/bikeroute.png" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card border="warning" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Hurricane} />
                            <Card.Body>
                                <Card.Title>Hurricane Infographic</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/assets/MVetter_LongformInfographic.png" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row> */}
            </Container>
        )
    }
}

export default Portfolio;