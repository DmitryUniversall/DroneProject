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
                                <h1 className="text-center theme-text-primary pb-3">
                                    Помогите нам стать лучше
                                </h1>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={2}>
                                <span className="msg-icon d-none d-lg-block theme-text-secondary"/>
                            </Col>

                            <Col lg={10}>
                                <p className="fs-6 theme-text-secondary">
                                    Ваши отзывы необходимы для нас. Делясь своим опытом, вы можете помочь нам улучшить наш сервис. Независимо от того, был ли у вас положительный опыт или вы столкнулись с какими-то вещами, требующими улучшения, ваш честный отзыв поможет нам обеспечить превосходный сервис, а так же поможет потенциальным клиентам принимать решения. Ваши слова могут изменить ситуацию и сформировать будущее нашего сервиса.                                </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={8}>
                                <div className="d-flex flex-column gap-4">
                                    <div>
                                        <label htmlFor="contactName" className="theme-text-primary">
                                            {/* TODO: '*' if field is blank */}
                                            Имя <span className="theme-text-accent">*</span>
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
                                        <label htmlFor="contactEmail" className="theme-text-primary">
                                            Email <span className="theme-text-accent">*</span>
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
                                        <label htmlFor="contactMessage" className="theme-text-primary">
                                            Отзыв <span className="theme-text-accent">*</span>
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
                                    <h5 className="theme-text-primary">Контактная информация:</h5>
                                    <div className="d-flex flex-column gap-2 pb-4 theme-text-secondary">
                                        <span>
                                            Email: test@gmail.com
                                        </span>
                                        <span>
                                            Телефон: +7 985 777 77 77
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="theme-text-primary">
                                        При написании отзыва, пожалуйста, соблюдайте следующие правила:
                                    </h4>
                                    <ul className="theme-text-secondary">
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
