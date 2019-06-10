import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import styled from 'styled-components';

// Import the images that will be displayed on the page
import HGAC from "../images/HGAC.png";
import DOTD from "../images/DOTD.png";
import SDMI from "../images/sdmi.png";
import UW from "../images/uw_logo.png";
import Tech from "../images/latech_logo.png";

const StyledHR = styled.hr`
    border: 1px solid gray;
`

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
                    <Col sm={8} md={9} className="font">
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
                    <Col sm={8} md={9} className="font">
                        <h3><strong>Louisiana Department of Transportation and Development</strong><br />GIS Specialist</h3>
                        <h4>September 2017 - November 2018 | Baton Rouge, Louisiana</h4>
                        <p>
                            Created web applications for various presentations. Created and maintained the department's REST services. These services were hosted on an ArcGIS
                            server. Heavily involved with the GIS integration into the new 511 system. Developed different Python scripts to automate processes.
                            Developed GIS products for applications from Digital Elevation Models (DEMs), large point clouds, and bare-earth terrain. These products were used
                            for topographic mapping and real-time analysis by DOTD, other public agencies, and private entities. Assist DOTD's Mapping Unit to assure
                            consistent use of the GIS products. Created and performed the QA/QC procedures.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={DOTD} alt="DOTD logo" />
                    </Col>
                    <Col sm={8} md={9} className="font">
                        <h3><strong>Louisiana Department of Transportation and Development</strong><br />GIS Analyst</h3>
                        <h4>May 2014 - September 2017 | Baton Rouge, Louisiana</h4>
                        <p>
                            Created and updated maps of Louisiana roads based on intradepartmental and outside requests. Wrote and developed Python scripts for daily work
                            processes and special projects for people with limited GIS experience. Generated and uploaded REST services to DOTD's ArcGIS Server.
                            Experience creating and editing feature classes within an ArcSDE environment. Created web applications.
                            Supported the Emergency Operations Center with map creation to show
                            roads closed due to the natural disaster event. These maps are used by the Governor of the state and the Secretary of the Department to help
                            make possible live saving decisions.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={SDMI} alt="SDMI logo" />
                    </Col>
                    <Col sm={8} md={9} className="font">
                        <h3><strong>Stephenson Disaster Management Institute</strong><br />GIS Analyst</h3>
                        <h4>July 2013 - May 2014 | Baton Rouge, Louisiana</h4>
                        <p>
                            Digitized structures based on 2010 6 inch aerial imagery. Updated 911 databases for various rural parishes throughout the state. Managed field
                            collections for two parishes. Performed QA/QC checks of addresses that were collected in the field.
                        </p>
                    </Col>
                </Row>
                <StyledHR />
                <h2>Technical Skills</h2>
                <Row>
                    <Col className="font">
                        <h3><strong>Cartography & GIS</strong></h3>
                        <p>ESRI Products (ArcMap, ArcGIS Online, ArcPro) | GDAL/OGR | Collector for GIS
                        </p>
                    </Col>
                    <Col className="font">
                        <h3><strong>Programming</strong></h3>
                        <p>JavaScript | GitHub | Python | PostGIS | D3 | Leaflet | PostgreSQL | jQuery | React | TypeScript | NPM | ArcGIS for JavaScript
                        </p>
                    </Col>
                    <Col className="font">
                        <h3><strong>Design</strong></h3>
                        <p>HTML | CSS | Bootstrap | Adobe Illustrator & Photoshop
                        </p>
                    </Col>
                </Row>
                <StyledHR />
                <h2>Education</h2>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={UW} alt="University of Wisconsin-Madison logo" />
                    </Col>
                    <Col sm={8} md={9} className="font">
                        <h3><strong>University of Wisconsin-Madison</strong></h3>
                        <p>Master's in Cartography & GIS | GPA 4.0<br />August 2018</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} md={3}>
                        <img src={Tech} alt="Louisiana Tech University logo" />
                    </Col>
                    <Col sm={8} md={9} className="font">
                        <h3><strong>Louisiana Tech University</strong></h3>
                        <p>BA in GIS | GPA 3.5<br />May 2013</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resume;