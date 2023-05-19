import React from "react";
import "./info.css"
import {Col, Container, Row} from "reactstrap";
import info from "./info";


class InfoSelection extends React.Component {  // TODO: bars selection?
    render() {
        return (
            <section id="InfoSelection">
                <Container>
                    {
                        info.map((block) => (
                            <Row className="block" id={block.id}>
                                <Col lg={3} className="header-col">
                                    <div className="block-title">
                                        <h1>
                                            {block.title}
                                        </h1>
                                    </div>
                                </Col>

                                <Col lg={9} className="main-col mt-4 mt-md-0">
                                    {
                                        block.themes.map((theme) => (
                                            <Row className="theme">
                                                <Col lg={12}>
                                                    <h2>
                                                        {theme.title}
                                                    </h2>
                                                    <div className="theme-texts">
                                                        {
                                                            theme.texts.map((text) => (
                                                                <div className="info-item">
                                                                    <div className="author-info">
                                                                        {text.author_role}<span>&bull;</span>
                                                                        <em className="author">
                                                                            {text.author}
                                                                        </em>
                                                                    </div>
                                                                    <div>
                                                                        {text.text}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </Col>
                                            </Row>
                                        ))
                                    }
                                </Col>
                            </Row>
                        ))
                    }
                </Container>
            </section>
        );
    }
}

export default InfoSelection
