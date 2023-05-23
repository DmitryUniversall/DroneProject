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
                                    Ваши отзывы необходимы для нас. Делясь своим опытом, вы можете помочь нам улучшить наш сервис. Независимо от того, был ли у вас положительный опыт или вы столкнулись с какими-то вещами, требующими улучшения, ваш честный отзыв поможет нам обеспечить превосходный сервис, а так же поможет потенциальным клиентам принимать решения. Ваши слова могут изменить ситуацию и сформировать будущее нашего сервиса.                                </p>
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

                                {/*<div id="message-warning">Error</div> TODO: error handle*/}

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
                                    <ul>
                                        <li>
                                            <span>
                                                Будьте честны: делитесь своими мыслями. Честность имеет огромное значение как для нас, так и для будущих клиентов.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Предоставьте подробные сведения. Укажите даты, местоположения или любую другую относящуюся к делу информацию.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Используйте уважительный тон: Поддерживайте вежливый и уважительный тон на протяжении всего вашего отзыва. Даже если у вас был негативный опыт, важно выражать свои мысли конструктивно, не прибегая к оскорбительным выражениям. Это поможет нам лучше разобраться в ситуации
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                По возможности предоставьте контакты для обратной связи. Мы сделаем всё, чтобы помочь вам
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
