import React from "react";
import "./info.css"
import {Col, Container, Row} from "reactstrap";
import info from "./info";


class InfoSelection extends React.Component {
    render() {
        return (
            <section id="InfoSelection">
                <Container id="dev">
                    {
                        info.map((block) => (
                            <Row className="block" id={block.id} key={Math.random()}>
                                <Col lg={3} className="header-col">
                                    <h1 className="block-title theme-gradient border-gradient gradient-blue to-right">
                                        {block.title}
                                    </h1>
                                </Col>

                                <Col lg={9} className="main-col mt-5 mt-lg-0">
                                    {
                                        block.themes.map((theme) => (
                                            <Row className="theme-block" key={Math.random()}>
                                                <Col lg={12}>
                                                    <h2>
                                                        {theme.title}
                                                    </h2>
                                                    <div className="mt-2">
                                                        {
                                                            theme.texts.map((text) => (
                                                                <div className="info-item" key={Math.random()}>
                                                                    <div className="author-info theme-text-accent">
                                                                        {text.author_role}<i>&bull;</i>
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
