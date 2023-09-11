import React from "react";
import {Col, Container, Row} from "reactstrap";
import "./footer.css"


class Footer extends React.Component {
    render() {
        return (
            <>
                <footer>
                    <Container className='pb-3'>
                        <Row>
                            <Col lg={12}>
                                <ul className="social-links">
                                    <li>
                                        <a href="https://github.com/DmitryMurashov">
                                            <i className="fa fa-github" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://vk.com/">
                                            <i className="fa fa-vk" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://telegram.org/">
                                            <i className="fa fa-telegram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>

                                <ul className="copyright">
                                    <li>&copy; Copyright 2023</li>
                                    <li className="ms-1">
                                        Created by{" "}
                                        <a title="Styleshout" href="https://github.com/DmitryMurashov">
                                            Dmitry Universall
                                        </a>
                                    </li>
                                </ul>
                            </Col>

                            <div id="go-top">
                                <a className="smoothscroll" title="Back to Top" href="#home">
                                    <i className="icon-up-open"></i>
                                </a>
                            </div>
                        </Row>
                    </Container>
                </footer>
            </>
        );
    }
}


export default Footer
