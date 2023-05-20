import React from "react";
import "./about.css"
import {Col, Container, Row} from "reactstrap";


class AboutSelection extends React.Component {
    render() {
        return (
            <>
                <div id="about">
                    <Container>
                        <Row>
                            <Col md={3} className="d-flex justify-content-center mb-5 mb-md-0">
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
                                        <p className="w-100">
                                            Добро пожаловать! Мы - ваш отправной пункт для всего, что связано с созданием беспилотных летательных аппаратов. Мы понимаем, насколько увлекательно создавать свой собственный беспилотник, по этому предлагаем вам ознакомиться с нашим набором для создания собственного БПЛА!
                                        </p>
                                    </Row>

                                    <Row>
                                        <div className="columns main-col">
                                            <h2>Наша задача и цели</h2>
                                            <p>
                                                Мы стремимся предоставить людям возможность исследовать безграничные возможности создания беспилотных летательных аппаратов и авиационных технологий.  Мы хотим поддерживать интерес к дизайну и проектированию беспилотных летательных аппаратов среди подростков. Мы твердо верим в важность вдохновения следующего поколения новаторов и инженеров.
                                            </p>
                                        </div>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}


export default AboutSelection
