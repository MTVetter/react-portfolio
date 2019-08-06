import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//Images to use
import Baseball from "../images/exploreBaseballStadiums.PNG";
import Veterans from "../images/veterans.PNG";
import Bike from "../images/bikeroute.png";
import Hurricane from "../images/HurricanePreparedness-thumbnail.png";
import Projects from "../images/projectSystems.PNG";
import BHR from "../images/BHR.PNG";
import Restaurants from "../images/restaurants.PNG";
import Population from "../images/popOutPopulation.PNG";
import Growth from "../images/growthForecast.PNG";

class Home extends Component{
    render() {
        return(
            <Container>
                <h2>Hi! I'm Michael. I'm a GIS developer and cartographer.</h2>
                <p>I enjoy creating cartographic products and creating new GIS applications.</p>
                <p><b>NOTE:</b> Items in blue are interactive applications while items in orange are static maps.</p>
                <br/>
                <h4 className="font">Recent Works:</h4>
                <Row>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Growth} />
                            <Card.Body>
                                <Card.Title>Regional Growth Forcast</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/GrowthForecast" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Population} />
                            <Card.Body>
                                <Card.Title>County Stats and Info</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/PopOutPopulation" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Restaurants} />
                            <Card.Body>
                                <Card.Title>Restaurants</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/Restaurants" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={BHR} />
                            <Card.Body>
                                <Card.Title>Basin Highlight Report</Card.Title>
                                <Button variant="primary" block href="https://datalab.h-gac.com/development/BHR_app" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Baseball} />
                            <Card.Body>
                                <Card.Title>Explore Baseball Stadiums</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/ExploreBaseballStadiums" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Veterans} />
                            <Card.Body>
                                <Card.Title>Veterans Across America</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/VeteransAcrossAmerica/" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col sm={4} className="font">
                        <Card border="warning" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Bike} />
                            <Card.Body>
                                <Card.Title>Southern Africa Bike Route</Card.Title>
                                <Button variant="warning" block href="https://mtvetter.github.io/assets/bikeroute.png" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} className="font">
                        <Card border="primary" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Projects} />
                            <Card.Body>
                                <Card.Title>Project Systems</Card.Title>
                                <Button variant="primary" block href="https://mtvetter.github.io/ProjectSystems" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4} className="font">
                        <Card border="warning" style={{width: "18rem"}}>
                            <Card.Img variant="top" src={Hurricane} />
                            <Card.Body>
                                <Card.Title>Hurricane Infographic</Card.Title>
                                <Button variant="warning" block href="https://mtvetter.github.io/assets/MVetter_LongformInfographic.png" target="_blank">Take a Look!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;