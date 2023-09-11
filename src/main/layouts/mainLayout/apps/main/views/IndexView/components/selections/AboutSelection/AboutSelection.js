import React from "react";
import "./about.css"
import {Col, Container, Row} from "reactstrap";


class AboutSelection extends React.Component {
    render() {
        return (
            <>
                <div id="about" className="pt-5 pb-5">
                    <Container>
                        <Row>
                            <Col xs={12} md={3} className="mb-3 mb-md-0 border-md-3 border-md-end picture-block theme-gradient border-gradient gradient-blue to-bottom">
                                <div className="d-flex flex-column justify-content-center h-100">
                                    <img
                                        className="picture align-self-center bg-white"
                                        src="/logo.svg"
                                        alt="Nordic Giant Profile Pic"
                                    />
                                </div>
                            </Col>
                            <Col xs={12} md={9} className="ps-5">
                                <Row className="nine columns main-col">
                                    <Row>
                                        <h2 className="pb-1 theme-text-primary">О нас</h2>
                                        <p className="w-100 theme-text-secondary">
                                            Добро пожаловать! Мы - ваш отправной пункт для всего, что связано с
                                            созданием беспилотных летательных аппаратов. Мы понимаем, насколько
                                            увлекательно создавать свой собственный беспилотник, по этому предлагаем вам
                                            ознакомиться с нашим набором для создания собственного БПЛА!
                                        </p>
                                    </Row>

                                    <Row className="mt-3 mt-md-0">
                                        <div className="columns main-col">
                                            <h2 className="pb-1 theme-text-primary">Наша задача и цели</h2>
                                            <p className="w-100 theme-text-secondary">
                                                Мы стремимся предоставить людям возможность исследовать безграничные
                                                возможности создания беспилотных летательных аппаратов и авиационных
                                                технологий. Мы хотим поддерживать интерес к дизайну и проектированию
                                                беспилотных летательных аппаратов среди подростков. Мы твердо верим в
                                                важность вдохновения следующего поколения новаторов и инженеров.
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
