import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

// Import the images that will be displayed on the page
import HGAC from "../images/HGAC.png";
import DOTD from "../images/DOTD.png";

class Resume extends Component {
    render() {
        return (
            <Container>
                <h2>Work Experience</h2>
                <br/>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={HGAC} alt="H-GAC logo" />
                    </Col>
                    <Col sm={8} md={9}>
                        <h3><strong>Houston-Galveston Area Council</strong><br />GIS Analyst/Developer</h3>
                        <h4>November 2018 - Present | Houston, Texas</h4>
                        <p>
                            Develop GIS applications for external and internal usage. Create and update REST
                            services to H-GAC's ArcGIS Server. Create new features in the department's SDE evnironment.
                            Develop customized widgets that are used within ESRI's Web AppBuilder. Majority of the
                            applications are developed with Web AppBuilder.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={DOTD} alt="DOTD logo" />
                    </Col>
                    <Col sm={8} md={9}>
                        <h3><strong>Louisiana Department of Transportation and Development</strong><br />GIS Specialist</h3>
                        <h4>September 2017 - November 2018 | Baton Rouge, Louisiana</h4>
                        <p>
                            Develop GIS products for applications from Digital Elevation Models (DEMs), large point clouds, and bare-earth terrain. These products are used
                            for topographic mapping and real-time analysis by DOTD, other public agencies, and private entities. Assist DOTD's Mapping Unit to assure
                            consistent use of the GIS products. Create and performs the QA/QC procedures.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={DOTD} alt="DOTD logo" />
                    </Col>
                    <Col sm={8} md={9}>
                        <h3><strong>Louisiana Department of Transportation and Development</strong><br />GIS Specialist</h3>
                        <h4>May 2014 - September 2017 | Baton Rouge, Louisiana</h4>
                        <p>
                            Created and updated maps of Louisiana roads based on intradepartmental and outside requests. Wrote and developed Python scripts for daily work
                            processes and special projects for people with limited GIS experience. Generated and uploaded REST services to DOTD's ArcGIS Server.
                            Experience creating and editing feature classes within an ArcSDE environment. Created web applications.
                            Support the Emergency Operations Center with map creation to show
                            roads closed due to the natural disaster event. These maps are used by the Governor of the state and the Secretary of the Department to help
                            make possible live saving decisions.
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;