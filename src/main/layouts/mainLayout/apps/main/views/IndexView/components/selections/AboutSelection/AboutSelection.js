import React from "react";
import "./about.css"
import {Col, Container, Row} from "reactstrap";


class AboutSelection extends React.Component {
    render() {
        return (
            <>
                <div id="about">
                    <Container className="row">
                        <Col md={3} className="d-flex justify-content-center">
                            <img
                                className="profile-pic align-self-start bg-white mt-5"
                                src="/logo.svg"
                                alt="Nordic Giant Profile Pic"
                            />
                        </Col>
                        <Col md={9}>
                            <Row className="nine columns main-col">
                                <Row>
                                    <h2>О нас</h2>
                                    <p className="w-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum.</p>
                                </Row>

                                <Row>
                                    <div className="columns main-col">
                                        <h2>Наша задача и цели</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                            mollit anim id est laborum.
                                        </p>
                                    </div>
                                </Row>
                            </Row>
                        </Col>
                    </Container>
                </div>
            </>
        );
    }
}


export default AboutSelection
