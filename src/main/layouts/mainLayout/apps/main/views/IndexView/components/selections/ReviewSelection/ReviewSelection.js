import React from "react";
import "./review.css"
import {Col, Container, Row} from "reactstrap";


class ReviewSelection extends React.Component {
    async sendReview() {}  // TODO

    render() {
        return (
            <>
                <div id="reviews">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <h1 className="text-center pb-3">
                                    Помогите нам стать лучше
                                </h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={2}>
                                <span className="msg-icon d-none d-lg-block"/>
                            </Col>

                            <Col lg={10}>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum.
                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={8}>
                                <div className="d-flex flex-column gap-4">
                                    <div>
                                        <label htmlFor="contactName">
                                            Имя <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactName"
                                            name="contactName"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactEmail">
                                            Email <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            defaultValue=""
                                            size="35"
                                            id="contactEmail"
                                            name="contactEmail"
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="contactMessage">
                                            Отзыв <span className="required">*</span>
                                        </label>
                                        <textarea
                                            rows="15"
                                            id="reviewMessage"
                                            name="reviewMessage"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <button className="btn submit">
                                            Отправить
                                        </button>
                                    </div>
                                </div>

                                {/*<div id="message-warning">Error boy</div> TODO: error handle*/}

                                {/*<div id="message-success"> TODO: success handle*/}
                                {/*    <i className="fa fa-check"></i>Your message was sent, thank you!*/}
                                {/*    <br/>*/}
                                {/*</div>*/}
                            </Col>

                            <Col lg={4} className="mt-4 mt-lg-0">
                                <div>
                                    <h4>Контактная информация:</h4>
                                    <div className="d-flex flex-column gap-2 pb-4">
                                        <span>
                                            Email: test@gmail.com
                                        </span>
                                        <span>
                                            Телефон: +7 985 777 77 77
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="widget-title">
                                        При написании отзыва, пожалуйста, соблюдайте следующие правила:
                                    </h4>
                                    <ul id="twitter">
                                        <li>
                                            <span>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}


export default ReviewSelection
